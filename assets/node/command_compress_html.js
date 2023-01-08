const { run_command_sync } = require("./command_run");

const COMMAND_NAME = "Compress HTML";
const COMMAND = `html-minifier --collapse-whitespace --remove-comments --remove-tag-whitespace --minify-css true --minify-js true assets/src/html/index.html -o index.html`;

if (require.main === module)
    run_command_sync({COMMAND_NAME, COMMAND});

module.exports = {
    COMMAND_NAME, COMMAND
};