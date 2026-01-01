// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
// npx tsx challenges/ctci-ice-cream-parlor.ts
// printf "2\n4\n5\n1 4 5 3 2\n4\n4\n2 2 4 3" | npx tsx challenges/ctci-ice-cream-parlor.ts

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
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */

function whatFlavors(cost: number[], money: number): void {
  let costMap: Map<number, number> = new Map();
  cost.forEach((c: number, index: number) => {
    const complement = money - c;
    if (costMap.has(complement)) {
      console.log(costMap.get(complement)! + 1, index + 1);
      return `${costMap.get(complement)! + 1} ${index + 1}`;
    }
    costMap.set(c, index);
  });
}

function main() {
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const money: number = parseInt(readLine().trim(), 10);

    const n: number = parseInt(readLine().trim(), 10);

    const cost: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((costTemp) => parseInt(costTemp, 10));

    whatFlavors(cost, money);
  }
}
