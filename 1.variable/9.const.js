// let 재할당 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 상수
const text = "hello";
// text = "hi"; // TypeError: Assignment to constant variable 에러 발생

// 1. 상수
const MAX_FRUITS = 5; // 상수를 사용할 때는 항상 대문자로 만들고, 단어와 단어사이에는 _ 로 분리시키기

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};

// apple = {};
console.log(apple);
apple.name = "orange";
console.log(apple);
