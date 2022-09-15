// Object literal { key: value}
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: "apple",
  hello: "🍎",
  0: 1,
  ["hello-bye"]: "✋🏻",
}; // 특수한 경우가 아니라면 7번 줄처럼 깔끔하게 만드는게 좋다

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple["hello-bye"]); // 대괄호 표기법 bracket notation
apple["name"];

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji); // undefined
