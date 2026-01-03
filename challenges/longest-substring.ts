// https://www.hackerrank.com/contests/coderally/challenges/longest-substring-1-2/problem
// npx tsx challenges/longest-substring.ts
// printf "bbcdbbb" | npx tsx challenges/longest-substring.ts

function processData(input: string) {
  let maxLength = 0;
  let maxSubstring = "";

  // 部分文字列の開始インデックス
  let start = 0;

  // 文字 → 最後に出現したインデックス
  const charIndexMap = new Map<string, number>();

  // ウインドウを拡張していく
  for (let end = 0; end < input.length; end++) {
    const char = input[end];

    // 現在のウインドウ内でこの文字を以前に見たか？
    if (charIndexMap.has(char)) {
      // 最後に見た位置の次のインデックスに開始位置を移動
      start = Math.max(start, charIndexMap.get(char)! + 1);
    }

    // マップにこの文字の最新位置を更新（または追加）
    charIndexMap.set(char, end);

    const currentLength = end - start + 1;

    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxSubstring = input.slice(start, end + 1);
    }
  }

  console.log(maxSubstring);
  return maxSubstring;
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
