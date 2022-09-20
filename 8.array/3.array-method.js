// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); //false

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf("🍎")); // 1

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes("🍑")); // true

// 추가 - 제일 뒤
// fruits.push("🍊");
// console.log(fruits);
// const length = fruits.push("🍊");
console.log(fruits);
// console.log(length);
// push - 배열의 끝에 추가를 하고, 새로 추가 되고 나서 배열의 길이를 리턴해준다
// 기존 배열에 아이템이 추가되니까 원본이 수정된다.

// 추가 - 제일 앞
// fruits.unshift("🍓");
const length = fruits.unshift("🍓");
console.log(fruits);
console.log(length); // 딸기가 맨 앞에 있고, 길이가 5가 됨

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits); // 맨 마지막이 제거된 나머지가 담긴 배열
console.log(lastItem); // 제거된 아이템

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits); // 맨 앞이 제거된 나머지가 담긴 배열
console.log(lastItem);

// push와 unshift, pop, shift는 원본 배열을 수정(업데이트)하는 함수

// 중간에 추가 또는 삭제
fruits.splice(1, 1); // 시작하는 인덱스에, (몇 개)를 삭제하는지 - 1부터 시작해 1개를 삭제
console.log(fruits);
// splice는 삭제된 아이템이 배열 형태로 반환됨

fruits.splice(1, 0, "🥑", "🍅"); // 1부터 시작해 0개를 삭제하고, 아보카도, 토마토를 추가
console.log(fruits); // 추가된 아이템은 시작점 뒤에 추가

// 잘라진 새로운 배열을 만듬 - 기존의 배열을 수정하지 않음
let newArr = fruits.slice(0, 2); // splice는 시작하는 점은 포함되고, 끝나는 점은 포함되지 않음
console.log(newArr);
console.log(fruits);
// slice의 인자는 옵셔널이다. 아무것도 전달하지 않으면 배열 전체가 반환된다.
// (1) 이라면 1부터 끝까지
// (-1) 뒤에서 한 칸 당겨진 아이템부터 slice

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // 기존의 배열을 수정하지 않음
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
// 중첩 배열을 하나의 배열로 만들기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [7, 8]]],
];
console.log(arr);
console.log(arr.flat()); // flat은 옆의 한단계 배열만 벗겨준다
console.log(arr.flat().flat()); // 지양
console.log(arr.flat(2)); // 숫자를 인자로 넣어서 원하는 단계까지 벗길 수 있다
arr = arr.flat(3);
// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill("s", 1, 3); // 1, 2 자리를 s로 채움
console.log(arr);

arr.fill("a", 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(" | ");
console.log(text);
