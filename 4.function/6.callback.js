//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수(calculator)안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  // 1. 정의하는 시점에서는 action이 어떤 함수인지 알지 못한다
  let result = action(a, b); // 3. 즉, 함수 안에서 필요한 순간에 호출한다.
  if (a < 0 || b < 0) {
    return;
  }
  console.log(result);
  return result;
}

calculator(-1, -1, multiply); // 2. 외부에서 전달하는 함수에 따라 달라진다
calculator(1, 2, add);
