// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
// npx tsx challenges/ctci-array-left-rotation.ts
// Sample Input:
// 5 4
// 1 2 3 4 5

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
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a: number[], d: number): number[] {
  const l = a.length;
  let ret: number[] = [];
  a.forEach((elem: number, inputIndex: number) => {
    const outputIndex = (inputIndex - d + l) % l;
    ret[outputIndex] = elem;
  });
  return ret;
}

function main() {
  const ws: WriteStream = createWriteStream(
    process.env["OUTPUT_PATH"] || "/dev/stdout"
  );
  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n: number = parseInt(firstMultipleInput[0], 10);

  const d: number = parseInt(firstMultipleInput[1], 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result: number[] = rotLeft(a, d);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
