const { run_command_sync } = require("./command_run");

const COMMAND_NAME = "Compile TypeScript";
const COMMAND = `tsc`;

if (require.main === module)
    run_command_sync({COMMAND_NAME, COMMAND});

module.exports = {
    COMMAND_NAME, COMMAND
};