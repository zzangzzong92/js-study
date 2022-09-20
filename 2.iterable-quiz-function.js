// [Symbol.iterator](): Iterator{next(): {value, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
// 0, 1, 2, 3, ....., 9
// 0, 2, 4, 6, ..., 18

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}
const multiple = makeIterable(0, 20, (num) => num * 2);
for (const num of multiple) {
  console.log(num);
}

const single = makeIterable(0, 10, (num) => num);
for (const num of single) {
  console.log(num);
}

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
