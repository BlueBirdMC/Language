const fs = require("fs");

function language(languageName) {
    if (!fs.readdirSync(__dirname + '/Languages').includes(`${languageName}.json`)) {
        throw `Language not found.`;
    }
    let path = `${__dirname}/Languages/${languageName}.json`;
    let json = JSON.parse(fs.readFileSync(path).toString("utf-8"));
    return json;
}

module.exports = language;
