// https://www.hackerrank.com/contests/coderally/challenges/longest-substring-1-2/problem
// npx tsx challenges/longest-substring.ts
// printf "bbcdbbb" | npx tsx challenges/longest-substring.ts

function processData(input: string) {
  // Enter your code here
  console.log({ longestSubstring: input });
  return input;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
