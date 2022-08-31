// 논리연산자 Logical Operator
// && 그리고
// || or 연산자, 또는
// ! 부정(단한연산자에서 온 것)
// !! 불리언값으로 변환 (단항연산자 응용버전)

//&&
let num = 8;
// if (num >= 0 && num < 9) {
//   console.log("👍🏻");
// }

// ||
if (num >= 0 || num < 9) {
  // 둘 중 하나만 true여도 출력됨
  console.log("👍🏻");
}

// !
if (!(num >= 0 || num < 9)) {
  // 둘 중 하나만 true여도 출력이 되는데 그 true를 false로 바꾸기때문에 false (출력안됨)
  console.log("👍🏻");
}
if (num != 9) {
  console.log("🤏🏻");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!"text"); // false
console.log(!!"text"); // true
