// https://www.hackerrank.com/challenges/migratory-birds/problem
// npx tsx challenges/migratory-birds.ts
// Sample Input:
// 6
// 1 4 4 4 5 3
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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
  // Write your code here
  let mostFrequentType = 0;
  let occurrences: number[] = [];
  let maxOccurrences = 0;
  arr.forEach((type: number) => {
    if (occurrences[type] === undefined) {
      occurrences[type] = 0;
    }
    occurrences[type]++;
    if (occurrences[type] > maxOccurrences) {
      maxOccurrences = occurrences[type];
      mostFrequentType = type;
    } else if (occurrences[type] === maxOccurrences) {
      mostFrequentType = Math.min(mostFrequentType!, type);
    }
  });
  return mostFrequentType;
}

function main() {
  const ws: WriteStream = createWriteStream(
    process.env["OUTPUT_PATH"] || "/dev/stdout"
  );

  const arrCount: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result: number = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
