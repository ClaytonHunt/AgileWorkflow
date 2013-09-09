/*global task */

"use strict";

task("default", ["lint"], function () {
    console.log("");
    console.log(colors.green + "------");
    console.log("* OK *");
    console.log("------" + colors.reset);
});

desc("Lint everything");
task("lint", ["lint node", "lint browser"]);

task("lint node", [], function () {
    var lint = require("./lint/lint_runner.js");

    var files = new jake.FileList();
    files.include("Jakefile.js");

    var lintOptions = {
        node: true
    };

    lint.validateFileList(files.toArray(), lintOptions, {});
});

task("lint browser", [], function () {
    var lint = require("./lint/lint_runner.js");

    var files = new jake.FileList();
    files.include("../src/**/*.js");

    var lintOptions = {
        browser: true
    };

    lint.validateFileList(files.toArray(), lintOptions, {});
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
