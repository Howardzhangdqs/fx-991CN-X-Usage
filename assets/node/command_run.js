const exec = require("child_process").exec;
const chalk = require("chalk");

const run_command = ({ COMMAND_NAME, COMMAND }) => {
    return new Promise((resolve, _reject) => {

        //console.log(COMMAND, COMMAND_NAME);

        console.log(chalk.cyan(COMMAND_NAME) + chalk.yellow(" 进程开始"));

        const exec_compress_html = exec(COMMAND, {
            stdio: 'inherit',
            shell: true
        });
        
        exec_compress_html.stdout.on('data', (data) => {
            process.stdout.write(data.toString());
        });

        exec_compress_html.stderr.on('data', (data) => {
            process.stdout.write(chalk.red(data.toString()));
        });
        
        exec_compress_html.on('exit', (code) => {
            console.log(`${chalk.cyan(COMMAND_NAME)} ${chalk.green("进程结束")} 返回值: ${chalk.cyan(code)}`);
            resolve(code);
        });
    })
};

const run_command_sync = async (obj) => {
    await run_command(obj);
};

module.exports = { run_command, run_command_sync };