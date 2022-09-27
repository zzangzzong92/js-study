"use strict"; // 엄격모드를 사용할거라면 파일 최상단에 명시해주면 좋다
// 엄격모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
var x = 1;
// delete x; // 엄격모드에서는 키워드 삭제가 불가능

function add(x) {
  var a = 2;
  // b = a + x; // strict 모드에서는 키워드 생략이 불가능
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (const num of array) {
  // 엄격모드에서는 키워드를 통해서 변수를 제대로 선언을 해줘야함 (let이나 const)
  console.log(num);
}
