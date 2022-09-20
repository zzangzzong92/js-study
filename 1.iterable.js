// Iterable 하다는 것은 순회가 가능하다는 것이다.
// [symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는걸 알 수 있다
// 순회가 가능하면 무엇을 할 수 있을까? -> for...of, spread 연산자를 사용가능하다
const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 }; // iteration protocol을 따라가지 않는 일반 객체에서는 for of 사용이 불가하다
for (const item in obj) {
  // for in이라는 연산자는 사용가능하. for..in - object의 key를 출력
  console.log(item);
}

const iterator = array.entries();
// for (const item of iterator) {
//   console.log(item);
// }
// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done); // done은 반복이 끝났다는 의미

// for...of 수동
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
