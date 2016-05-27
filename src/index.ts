import * as fs from 'fs';
import * as path from 'path';
import * as commander from 'commander';

export function afterStartCompileProcess(project) {
    console.log('bb-tslint-plugin: copying tslint.json');

    let src = path.join(__dirname, '..', 'tslint.json');
    let dest = path.join(project.dir, 'tslint.json');

    fs.readFile(src, (error, data) => {
        if (error) return console.error(error);
        fs.writeFile(dest, data, (error) => {
            if (error) return console.error(error);
        });
    });
}

export function registerCommands(c: commander.ICommand, bb: any, consumeCommand: Function) {

}
