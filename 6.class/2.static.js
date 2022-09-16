// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUIT = 4;
  constructor(name, emoji) {
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    this.name = name;
    this.emoji = emoji;
  }
  // 클레스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);
// apple, orange는 Fruit 클래스의 Instance이다.
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

//static 예제 - obj를 따로 만들지 않아도 사용이 가능한것처럼!
Math.pow();
Number.isFinite(1);
