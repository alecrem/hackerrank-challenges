// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// npx tsx challenges/sherlock-and-anagrams.ts
// printf "2\nabba\nabcd" | npx tsx challenges/sherlock-and-anagrams.ts
"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s: string): number {
  // Write your code here
  return 0;
}

function main() {
  const ws: WriteStream = createWriteStream(
    process.env["OUTPUT_PATH"] || "/dev/stdout"
  );

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const s: string = readLine();

    const result: number = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}
