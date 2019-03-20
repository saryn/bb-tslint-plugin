import * as fs from "fs";
import * as path from "path";
import * as commander from "commander";

export function afterStartCompileProcess(project) {
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

export function registerCommands(
  c: commander.ICommand,
  bb: any,
  consumeCommand: Function
) {}
