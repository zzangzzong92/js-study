// const { textChangeRangeIsUnchanged } = require("typescript");

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀자~");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}

const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    // 자식 class에서 생성자를 만드려면 부모 클래스의 것들도 받아와야함
    super(color); // 색상은 Animal에 정의되어 있으니 그 생성자를 불러오기 위해서 super 키워드를 사용한다
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자아~");
  }
  // overriding - 자식 클래스에서 부모 클래스의 함수를 덮어씌우는 것
  eat() {
    super.eat();
    console.log("강아지가 먹는다");
  }
}

const dog = new Dog("빨강이", "짱쫑");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
