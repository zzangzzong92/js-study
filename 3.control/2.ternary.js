// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 표현식(참인경우) : 표현식(거짓인경우)
let fruit = "orange";
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else {
  console.log("!!");
}

fruit === "apple" ? console.log("🍎") : console.log("🍊");

let emoji = fruit === "apple" ? "🍎" : "🤪"; // emoji를 선언하고 fruit이 사과이면 사과이모지가 나오고 아니면 얼굴이모지가 할당됨
console.log(emoji);
