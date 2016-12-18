import * as readline from "readline";

function main(searchString: string) {
  const rl = readline.createInterface({ input: process.stdin });
  rl.on("line", (line: string) => {
    if (line.indexOf(searchString) >= 0)
      console.log(line);
  });
}

main(process.argv.slice(2)[0]);
