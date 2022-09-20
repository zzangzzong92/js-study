// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

// 재사용성 떨어짐
// function replaceFruits(arr) {
//   const replaced = Array.from(arr);
//   for (let i = 0; i < replaced.length; i++) {
//     if (replaced[i] === "🍓") {
//       replaced[i] = "🥝";
//     }
//   }
//   return replaced;
// }
// const arr = ["🍌", "🍓", "🍇", "🍓"];
// const result = replaceFruits(arr);
// console.log(result);

//재사용성 증가시킴
function replaceFruits(arr, from, to) {
  //from: 무엇을, to: 어떤걸로 바꿀지
  const replaced = Array.from(arr);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const arr = ["🍌", "🍓", "🍇", "🍓"];
const result = replaceFruits(arr, "🍓", "🥝");
console.log(result);

// 퀴즈2: 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇 개나 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2
function count(arr2, item) {
  let counter = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(["🍌", "🥝", "🍇", "🥝"], "🥝"));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열 1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']
function match(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
}

console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
