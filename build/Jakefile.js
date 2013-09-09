"use strict";

desc("Build Everything");
task("default", ["dependency"], function () {
    console.log("");
    console.log(colors.green + "------");
    console.log("* OK *");
    console.log("------" + colors.reset);
});

task("dependency", function () {
    console.log("dependency");
});

var colors = {
    black: '\u001b[30m',
    red: '\u001b[31m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    blue: '\u001b[34m',
    magenta: '\u001b[35m',
    cyan: '\u001b[36m',
    white: '\u001b[37m',
    reset: '\u001b[0m'
};
