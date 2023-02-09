const LangManager = require("./LanguageManager");

let BaseLanguage = "eng";

function Language(language, content) {
    try {
        return new LangManager(language.toLowerCase()).getContent(content);
    } catch(err) {
        return new LangManager(BaseLanguage).getContent(content);
    }
}

module.exports = Language;
