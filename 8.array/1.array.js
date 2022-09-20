// 배열 생성 방법
let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2, 3, 4, 5); // 요소들의 집합으로 부터 새로운 배열을 반환한다
console.log(array);

const anotherArray = [1, 2, 3];
console.log(anotherArray);

array = Array.from(anotherArray); // 기존의 배열로부터 새로운 배열을 만든다
console.log(array);

// '일반적'으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다
// but JS에서의 배열은 연속적으로 이어져 있지 않고, 오브젝트와 유사하다.
// 즉, JS의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.
// (연속적이며 동일한 메모리 크기를 가져야하지만 JS에서는 다른 데이터타입을 넣을 수 있다.)
// 이를 보완하기 위해서 타입이 정해져 있는 타입 배열이 있다 (Typed Collections).
array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array);
