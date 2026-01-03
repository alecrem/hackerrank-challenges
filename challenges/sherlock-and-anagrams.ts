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
  const map = new Map<string, number>();
  // Generate all substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j);
      // For each substring, sort it to get signature
      const signature = substring.split("").sort().join("");
      // Increment map.get(signature) or set to 1
      map.set(signature, (map.get(signature) || 0) + 1);
    }
  }
  // For each map value n, add n*(n-1)/2 to total
  // Combination formula: (n choose 2)
  let total = 0;
  for (const count of map.values()) {
    total += (count * (count - 1)) / 2;
  }
  return total;
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
