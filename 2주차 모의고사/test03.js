function solution(arr, n) {
  let answer = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        answer = answer + arr.splice(i, 1);
      }
    }
    if (answer !== arr[i]) {
      result.push(arr[i]);
    }
  }
  result.sort(function (a, b) {
    var a1 = a[n];
    var b1 = b[n];
    if (a1 === b1) {
      return (a > b) - (a < b);
    } else {
      return (a1 > b1) - (a1 < b1);
    }
  });
  return result;
}
let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;
console.log(solution(arr, n));
