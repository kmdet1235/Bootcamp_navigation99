function solution(arr1) {
  let answer = 45;
  for (let i = 0; i < arr1.length; i++) {
    answer -= arr1[i];
  }
  return answer;
}
let arr1 = [1, 3, 5, 9, 2, 4, 8, 0];
console.log(solution(arr1));
