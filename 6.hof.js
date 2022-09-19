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
reuslt = products.some((item) => item.name === "🍪");
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
reuslt = products.every((item) => item.name === "🍪");
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로
reuslt = products.filter((item) => item.name === "🍪");
console.log(result);
