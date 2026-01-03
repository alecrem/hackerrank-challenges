// https://www.hackerrank.com/contests/coderally/challenges/longest-substring-1-2/problem
// npx tsx challenges/longest-substring.ts
// printf "bbcdbbb" | npx tsx challenges/longest-substring.ts

function processData(input: string) {
  let longestSubstring = "";
  // 入力値の各文字をループ
  input.split("").forEach((_, startIndex) => {
    // その文字から始まる部分文字列をループ
    for (let endIndex = startIndex + 1; endIndex <= input.length; endIndex++) {
      const substring = input.slice(startIndex, endIndex);
      // 部分文字列の文字の集合を作成（複数回入っている文字が排除される）
      const charSet = new Set(substring.split(""));
      if (charSet.size === substring.length) {
        // 今までで一番長かったら最長文字列を更新
        if (substring.length > longestSubstring.length) {
          longestSubstring = substring;
        }
      } else {
        // 重複文字が見つかったらそれ以上伸ばしても無駄なのでループを抜ける
        break;
      }
    }
  });
  console.log(longestSubstring);
  return longestSubstring;
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
