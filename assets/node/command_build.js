/** Build
 * 调用方法: npm run build
 */

const { run_command_sync, run_command } = require("./command_run");
const { fork } = require("child_process");
const chalk = require("chalk");

(async () => {
    const build_start_time = new Date();

    await run_command_sync(require("./command_compress_html"));
    await run_command_sync(require("./command_compile"));

    const command_compress = require("./command_compress");
    run_command(command_compress).then(command_compress.change_path).then(() => {
        console.log(chalk.yellow("\nBuild") + ` 在${require("chalk").green(((new Date() - build_start_time) / 1000).toFixed(3))}秒内完成`);
    });
})();