// 접근제어자 (캡슐화) - 인스턴스가 한 번 만들어지면 외부에서 변경이 불가능하게 만드는것
// private(외부접근불가) - #, public(외부접근가능) - default, protected(상속된자식만접근가능)
class Fruit {
  // 이 부분이 field
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//apple.#name = "오렌지"; //#field는 외부에서 접근이 불가능함
console.log(apple); //field의 프로퍼티들을 private으로 만들어두면 console에도 찍히지 않는다
