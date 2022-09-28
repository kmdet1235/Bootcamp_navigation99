// array에 있는 숫자들 중에 소수의 최대값과 소수가 아닌 수의 최소값을 찾아서 "(최소값)(최대값)" 형태로 문자열을 반환하는 함수 작성

function solution(s) {
  var newa = s // 받은 문자열을 배열로 바꿔줌
    .toString()
    .split(" ")
    .map((a) => parseInt(a));
  let answer_min = 0, // 정답을 넣기 위한 변수선언
    answer_max = 0;
  var arr_min = []; // 소수가 아닌수의 최소값
  var arr_max = []; //소수의 최대값
  for (let i = 0; i < newa.length; i++) {
    for (let j = 2; j < newa[i]; j++) {
      if (newa[i] % j === 0) {
        // 소수를 구하기 위한 조건문
        arr_min.push(newa[i]); // 소수가 아닐경우 생성되는 배열
      }
    }
  }
  arr_min = arr_min.filter((a, b) => {
    // 배열속에 중복된 값을 제외
    return arr_min.indexOf(a) === b;
  });
  arr_max = newa.filter((a) => !arr_min.includes(a)); // 원래 입력받은 배열에서 소수가 아닌값을 빼는 차집합 함수
  answer_max = Math.max.apply(null, arr_max); // 소수중에 최대값 입력
  answer_min = Math.min.apply(null, arr_min); // 소수가 아닌 값중에 최소값 입력
  console.log(answer_min, answer_max);
}

let s = "97 75 88 99 95 92 73";
console.log(solution(s));
