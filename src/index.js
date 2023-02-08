const LangManager = require('./LanguageManager');

var BaseLanguage = 'eng';
function Language(language, content) {
    try {
        new LangManager(language).getContent(content);
    } catch(err) {
            return new LangManager(BaseLanguage).getContent(content);
    }
}

module.exports = Language;