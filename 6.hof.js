const fruits = ["🍌", "🍓", "🍇", "🍓"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 배열을 돌면서 원하는 것(콜백함수)을 할때
// forEach - 배열의 요소마다 주어진 임무를 수행
fruits.forEach(function (value, index, array) {
  // 콜백함수의 인자는 배열의 요소와 index와 배열전체를 전달해줌, 사용하지 않는 인자는 생략가능
  console.log("----------");
  console.log(value);
  // console.log(index);
  // console.log(array);
});

fruits.forEach((value) => console.log(value));
console.clear();

// 조건에 맞는(콜백함수) 아이템을 찾을때
const item1 = { name: "🥛", price: 2 };
const item2 = { name: "🍪", price: 3 };
const item3 = { name: "🍙", price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => {
  return value.name === "🍪";
});
// const found = products.find((value) => value.name === "🍪");
// 값이 바로 return 되는 경우에는 return 생략가능
// 조건에 맞는 데이터를 찾아서 그 데이터를 반환해주는 것임
// find: 제일 먼저 조건에 맞는 아이템을 반환
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === "🍪");
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === "🍪");
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "🍪");
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter((item) => item.name === "🍪");
console.log(result);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: 중, 배열의 메소드 중 flat을 map으로 활용한다고 생각하자
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["zzang", "zzong"].flatMap((text) => text.split(""));
console.log(result);

// sort - 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ["hi", "abc"];
texts.sort();
console.log(texts); // 알파벳 a부터 출력

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // 0, 1, 10, 2, 4, 5 - 1다음 10이 나오는 이유는 10의 1을 먼저 인식하기 때문이다
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b); // 배열의 숫자 하나씩 가져와서 빼면서 비교하게끔 만들어준다.
console.log(numbers);

// reduce - 배열의 요소들을 접어서 접어서 하나의 값으로
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
