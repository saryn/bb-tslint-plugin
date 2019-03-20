"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function afterStartCompileProcess(project) {
    console.log("bb-tslint-plugin: copying tslint.json");
    const src = path.join(__dirname, "..", "tslint.json");
    const dest = path.join(project.dir, "tslint.json");
    fs.readFile(src, (readError, data) => {
        if (readError) {
            return console.error(readError);
        }
        fs.writeFile(dest, data, writeError => {
            if (writeError) {
                return console.error(writeError);
            }
        });
    });
}
exports.afterStartCompileProcess = afterStartCompileProcess;
function registerCommands(c, bb, consumeCommand) { }
exports.registerCommands = registerCommands;
//# sourceMappingURL=index.js.map