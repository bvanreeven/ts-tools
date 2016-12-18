import * as fs from "fs";

function main() {
  fs.readdir(".", (err, files) => {
    if (err)
      throw err;
    files.forEach(f => console.log(f));
  });
}

main();
