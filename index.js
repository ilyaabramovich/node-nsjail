const BinWrapper = require("bin-wrapper");

const base = "https://github.com/ilyaabramovich/node-nsjail/raw/master";

module.exports = new BinWrapper()
  .src(`${base}/linux_x64/nsjail`, "linux", "x64")
  .dest(path.join("vendor"))
  .use("nsjail");
