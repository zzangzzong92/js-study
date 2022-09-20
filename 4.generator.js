// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10; // 최대값 10 이하
//     let num = 0; // 시작값 0
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

// for (const num of multiple) {
//   console.log(num);
// }

function* multipleGernerator() {
  // 함수에 *를 붙여줘야 제너레이터인지 알 수 있다.
  for (let i = 0; i < 10; i++) {
    // yeild는 return과 비슷하나 다른 점은 return은 바로 return을 하지만 yeild는 사용자가 원할때까지 기다렸다가 사용자가 요구할때마다 하나씩 return
    yield i ** 2;
  }
}
const multiple = multipleGernerator();
let next = multiple.next();
console.log(next.value, next.done); // 0

// multiple.return(); // return은 종료하는 것
multiple.throw("Error!"); // 내부로 error를 던짐

next = multiple.next();
console.log(next.value, next.done); // 1
next = multiple.next();
console.log(next.value, next.done); // 4
