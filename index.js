const fs = require("fs");
const path = require("path");

console.log("Hello World!!");
console.log("current dir", __dirname);
console.log("working dir", path.resolve("."));
readDirContent(__dirname);

fs.writeFileSync(path.join(__dirname, Date.now().toString() + ".ignoreMe"), "Date.now().toString()");

function readDirContent(dir) {
  fs.readdirSync(dir).map(file => {
    fs.statSync(path.join(dir,file)).isDirectory()
     ? readDirContent(path.join(dir,file))
     : console.log(path.join(dir,file));
  });
}
