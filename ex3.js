const arr = [7, 1, 8, 2, 3, 0, 9, 0, 5];

let zeroCount = 0;
for (let i = 0; i < arr.length; i++) {
  zeroCount += arr[i] === 0 ? 1 : 0;
}

console.log(zeroCount);
