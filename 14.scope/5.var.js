// var의 특징(💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕..
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수를 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기가 어렵다
something = "💩";
console.log(something);

// 2. 중복선언이 가능함
var poo = "💩";
var poo = "💩";
console.log(poo);

let num = 0;
// let num = 1; // 재선언이 불가

// 3. 블록 레벨 스코프 안됨
// global 변수와 local 변수가 동일해짐 - 대참사
var apple = "사과";
{
  var apple = "🍎";
  {
    var apple = "🍏";
  }
}
console.log(apple); // 전역 스코프의 사과가 출력되는게 아니라 초록 사과가 출력됨

// 4. 함수 레벨 스코프만 지원 됨
function example() {
  var dog = "🐶";
}
// console.log(dog);
