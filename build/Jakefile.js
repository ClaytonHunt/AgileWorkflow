desc("Build Everything");
task("default", [], function () {
    console.log("");
    console.log(colors.green + "------");
    console.log("* OK *");
    console.log("------" + colors.reset);
});

desc("Lint everything");
task("lint", [], function () {
    var lint = require("./lint/lint_runner.js");
    lint.validateFile("Jakefile.js", {}, {});
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
