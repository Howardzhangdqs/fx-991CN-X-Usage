const fs = require("fs");
const chalk = require("chalk");

const MAP_PATH = "../js/bundle.min.js.map";
const data = JSON.parse(fs.readFileSync(MAP_PATH).toString());
for (let i in data.sources) data.sources[i] = data.sources[i].replace(/\\/g, '/');
fs.writeFileSync(MAP_PATH, JSON.stringify(data, null, ""));