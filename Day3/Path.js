const path = require("path");
console.log("file name: ", __filename);
console.log("dir name: ", __dirname);

// folder/student/DataTransfer.text

const filePath = path.join("folder", "student", "DataTransfer.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const resolvePath = path.resolve(filePath);
const extention = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log({
  parseData: parseData,
  resolvePath: resolvePath,
  extention: extention,
  baseName: baseName,
  dirName: dirName,
});
