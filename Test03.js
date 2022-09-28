function solution(s) {
  let answer = "";
  var arr_min = []; // 소수가 아닌수의 최소값
  var arr_max = []; //소수의 최대값
  for (let i = 0; i < s.length; i++) {
    for (let j = 2; j < s[i]; j++) {
      if (s[i] % j === 0) {
        arr_min.push(s[i]);
      } else {
        arr_max.push(s[i]);
      }
    }
  }
  arr_min = new Set(arr_min);
  arr_max = new Set(arr_max);
  console.log(arr_min, arr_max);
}

let s = [97, 75, 88, 99, 95, 72, 73];
console.log(solution(s));
