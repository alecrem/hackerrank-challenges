// https://www.hackerrank.com/challenges/new-year-chaos/problem
// npx tsx challenges/new-year-chaos.ts
// printf "2\n5\n2 1 5 3 4\n5\n2 5 1 3 4" | npx tsx challenges/new-year-chaos.ts
"use strict";

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q: number[]): void {
  // Write your code here
}

function main() {
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const n: number = parseInt(readLine().trim(), 10);

    const q: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}

export {};
