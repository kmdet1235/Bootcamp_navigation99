// 2주차 첫번째 알고리즘 문제
// 자연수 배열이 주어지면, 배열을 뒤집어서 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴하는 문제
// 결과값만 필요한게 아니라 더하는 과정도 출력되도록 해야함.

function solution(n) {
  var result = "";
  var arr = "";
  var sum = 0;
  answer = n
    .toString()
    .split("")
    .reverse()
    .map((a) => parseInt(a)); // 주어진 수식을 문자열로 바꾸고, 배열에 쪼개서 넣은 후 거꾸로 배열하는 메소드 사용. map을 이용해서 정수로 변환 후 배열에 다시 넣음
  for (let i = 0; i < answer.length; i++) {
    // 배열의 길이만큼 반복해서 총 합을 구해줌
    sum += answer[i];
    if (i < answer.length - 1) {
      // 더하는 과정의 식을 출력한는 과정에서 마지막에 등호 앞에도 '+'가 출력이 되는걸 방지하기위한 조건문
      arr = arr + answer[i] + "+";
    } else {
      arr = arr + answer[i];
    }
  }
  return arr + "=" + sum;
}
console.log(solution(718253));
