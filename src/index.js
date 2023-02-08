const LangManager = require('./LanguageManager');

var BaseLanguage = 'eng';

function Language(language, content) {
    try {
        return new LangManager(language).getContent(content);
    } catch(err) {
        if (err) return new LangManager(BaseLanguage).getContent(content);
    }
}

module.exports = Language;