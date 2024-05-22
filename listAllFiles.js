const fs = require('fs');
const { join } = require('path');

let totalFiles = 0;

function listAllFiles(dir) {
  const fileNames = [];
  const dirents = fs.readdirSync(dir, {
    encoding: 'utf8',
    withFileTypes: true,
  });
  dirents.forEach((dirent) => {
    if (dirent.isDirectory()) {
      fileNames.push(...listAllFiles(join(dir, dirent.name)));
      return;
    }
    totalFiles++;
    const fileName = join(dirent.path, dirent.name);
    fileNames.push(fileName);
  });
  return fileNames;
}

console.log(listAllFiles('.'));
console.log({ totalFiles });
