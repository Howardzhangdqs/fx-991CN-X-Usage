const { run_command } = require("./command_run");

const COMMAND_NAME = "Compress JavaScript";
const COMMAND = `cd assets/js && uglifyjs ../dist/*.js -c --source-map url='./bundle.min.js.map' -o bundle.min.js`;

const change_path = () => {
    const fs = require("fs");

    const MAP_PATH = "assets/js/bundle.min.js.map";
    const data = JSON.parse(fs.readFileSync(MAP_PATH).toString());
    for (let i in data.sources) data.sources[i] = data.sources[i].replace(/\\/g, '/');
    fs.writeFileSync(MAP_PATH, JSON.stringify(data));

    console.log(require("chalk").green("Map文件目录修改完毕"));
};

if (require.main === module)
    run_command({ COMMAND_NAME, COMMAND }).then(change_path);

module.exports = {
    COMMAND_NAME, COMMAND, change_path
};