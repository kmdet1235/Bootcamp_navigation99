function solution(n) {
  var result = "";
  var arr = "";
  var sum = 0;
  answer = n
    .toString()
    .split("")
    .reverse()
    .map((a) => parseInt(a));
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
    if (i < answer.length - 1) {
      arr = arr + answer[i] + "+";
    } else {
      arr = arr + answer[i];
    }
  }
  return arr + "=" + sum;
}
console.log(solution(718253));
