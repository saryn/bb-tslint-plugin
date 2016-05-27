"use strict";
const fs = require('fs');
const path = require('path');
function afterStartCompileProcess(project) {
    console.log('bb-tslint-plugin: copying tslint.json');
    let src = path.join(__dirname, '..', 'tslint.json');
    let dest = path.join(project.dir, 'tslint.json');
    fs.readFile(src, (error, data) => {
        if (error)
            return console.error(error);
        fs.writeFile(dest, data, (error) => {
            if (error)
                return console.error(error);
        });
    });
}
exports.afterStartCompileProcess = afterStartCompileProcess;
function registerCommands(c, bb, consumeCommand) {
}
exports.registerCommands = registerCommands;
//# sourceMappingURL=index.js.map