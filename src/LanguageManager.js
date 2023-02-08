const fs = require("fs");

class LangManager {
    #content;

    constructor(language) {
        let fileContents = fs.readFileSync(`${__dirname}/lang/${language}.ini`).toString();
        let fileLen = fileContents.length;
        this.#content = fileContents.split(/\r?\n/);
        let fixedContent = this.fixContent(fileLen);
        this.#content = this.turnIntoObject(fixedContent);
    }

    getContent(info) {
        return this.#content[info];
    }

    fixContent(fileLen) {
        let content = "";
        let obj = {};
        for (let i = 0; i < fileLen; ++i) {
            if (typeof this.#content[i] !== "undefined") {
                content = this.#content[i];
                if (content.includes(content.split(/#+/))) {
                    if (content.includes("=")) {
                        obj[i] = content.split("=");
                    } else if (content.includes(" =")) {
                        obj[i] = content.split(" =");
                    } else if (content.includes("= ")) {
                        obj[i] = content.split("= ");
                    }
                }
            }
        }
        return obj;
    }

    turnIntoObject(fixedContent) {
        let obj = {};
        Object.values(fixedContent).forEach((realArray) => {
            let index = realArray[0];
            let indexVal = realArray[1];
            obj[index] = this.removeQuotes(indexVal);
        });
        return obj;
    }

    removeQuotes(indexVal) {
        for (let i = 0; i < 2; ++i) {
            if (/\"+/.test(indexVal)) {
                indexVal = indexVal.replace(/\"+/, "");
            }
        }
        return indexVal;
    }
}

module.exports = LangManager;