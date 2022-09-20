// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

function replaceFruits(arr, from, to) {
  return arr.map((item) => (item === from ? to : item));
}

const arr = ["🍌", "🍓", "🍇", "🍓"];
const result = replaceFruits(arr, "🍓", "🥝");
console.log(result);

// 퀴즈2: 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇 개나 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2
function count(arr2, item) {
  // 첫번째 방법
  return arr2.filter((value) => value === item).length; // value가 내가 찾는 item일때만 filtering을 해주고 새로운 배열이 만들어지고
  //그 배열의 길이만 출력하면 된다.

  // 두번째 방법
  // return arr2.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0); // 0은 count의 초기값
}
console.log(count(["🍌", "🥝", "🍇", "🥝"], "🥝"));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열 1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']
function match(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}

console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));

// 퀴즈4: 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums
  .filter((num) => num > 5) // [16, 25, 34, 21]
  .reduce((avg, num) => avg + num / 4, 0); // 0은 avg의 초기값
//.reduce((avg, num, _(index), array) => avg + num / array.length, 0); reduce의 인자값으로 index를 넣을 수 있지만
// 사용하지 않으면 생략하거나 _로 처리가능
console.log(result2);
