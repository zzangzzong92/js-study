//함수 선언문 function name() { }
//함수 표현식 const name = function () { }
//화살표 함수 = const name = () => { }
let add = function sum(a, b) {
  return a + b;
};
console.log(add(1, 2));
add = (a, b) => {
  return a + b;
};
//단순히 값만 리턴하는 함수라면 return과 {}를 생략할 수 있다. = add = (1, 2) => a + b;
console.log(add(1, 2));

//생성자 함수 const object = new function(); // 객체편에서 찾아보기

//IIF (Immediately-Invoked Function Expressions) = 즉각 호출 함수 표현식 (함수를 괄호로 묶어서 표현)
//잘 사용하지 않고 프론트엔드에서 가끔 즉각적으로 뭔갈 실행할 때 사용함
(function run() {
  console.log("😻");
})();
