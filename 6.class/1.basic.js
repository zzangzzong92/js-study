// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래되고 고전적인 방법 - 더이상 사용 x)
// 2. 클래스 (최신)

// 생성자 함수
// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
// }

// const apple = new Fruit("apple", "🍎");
// const orange = new Fruit("orange", "🍊");

// 클래스
class Fruit {
  constructor(name, emoji) {
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    // 객체안에서 사용하는 멤버함수가 있다면 이름만 작성해서 일반함수나 에로우 펑션을 사용하면 됨
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple, orange는 Fruit 클래스의 Instance이다.
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display;

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "zzangzzong" };
