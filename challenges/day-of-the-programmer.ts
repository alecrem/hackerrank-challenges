// https://www.hackerrank.com/challenges/day-of-the-programmer/problem
// npx tsx challenges/day-of-the-programmer.ts
// Sample Input:
// 2017
// 13.09.2017

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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number): string {
  const isLeapYear =
    year < 1919
      ? year % 4 === 0
      : year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  const day = 256 - 31 - (isLeapYear ? 29 : 28) - 31 - 30 - 31 - 30 - 31 - 31;
  if (year === 1918) return `${day + 13}.09.1918`;
  return `${day}.09.${year}`;
}

function main() {
  const ws: WriteStream = createWriteStream(
    process.env["OUTPUT_PATH"] || "/dev/stdout"
  );

  const year: number = parseInt(readLine().trim(), 10);

  const result: string = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
