function solution(s) {
  let answer = "";
  let arr = s.split(" ").join("");
  let arr2 = s.split(" ");
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      answer = answer + arr[i].toUpperCase();
    } else {
      answer = answer + arr[i].toLowerCase();
    }
  }
  let sum = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (j < arr2.length - 1) {
      result += answer.substr(sum, arr2[j].length) + " ";
      sum = sum + arr2[j].length;
    } else {
      result += answer.substr(sum, arr2[j].length);
    }
  }
  return result;
}
let s = "hang hae ninety nine";
console.log(solution(s));
