// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: '🍎`); // 객체 안에서 내 자신에게 접근할 때에는 this를 사용해야 한다
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: '🍊`); // 객체 안에서 내 자신에게 접근할 때에는 this를 사용해야 한다
//   },
// };

// 생성자 함수
function Fruit(name, emoji) {
  // 생성자 함수는 시작하는 첫글자가 대문자!
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능! js가 자동으로 return 해주기 때문
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);
