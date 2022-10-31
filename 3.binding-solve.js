// function Cat(name) {
//   this.name = name;
//   this.printName = function () {
//     console.log(`고양이 이름을 출력한다옹 : ${this.name}`);
//   };
// 1. bind 함수를 이용해 수동저긍로 바인딩 해주기
// this.printName = this.printName.bind(this);
//this라는 앞으로 만들어질 인스턴스(괄호안의 this)와 printName을 새롭게 바운드한 함수를 this.printName에 전달해준다
//이렇게 하면 객체가 만들어지는 시점에 객체와 함수가 영원히 bind(연결)된다.
// }

// 2. 함수를 만들때마다 수동적으로 만들면 번거롭다. 개선해보면
function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용 : arrow 함수는 렉시컬 환경에서의 this를 기억한다
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.
  this.printName = () => {
    // 표현식이 아닌 화살표함수를 사용하면 된다.
    console.log(`고양이 이름을 출력한다옹 : ${this.name}`);
  };
}

// 정적으로 결정되는 프로그래밍 언어처럼 사용하려면, 조금 더 예상 가능한 this를 기억하고 간직하고 바인딩 하고 싶다면
// bind라는 함수 api를 사용하던지, arrow함수를 사용하면 된다.

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름을 출력한다멍 : ${this.name}`);
  };
}

const cat = new Cat("야옹");
const dog = new Dog("멍멍");
cat.printName();
dog.printName();

// JS에서 caller에 따라 동적으로 this가 동적으로 결정되는 경우
dog.printName = cat.printName;
dog.printName();

//이것이 왜 문제가 되는 것일까?
function printOnMonitor(printName) {
  console.log("모니터를 준비하고!, 전달된 콜백을 실행!");
  printName();
}
printOnMonitor(cat.printName); //undefined. 이유는 printOnMonitor함수에서 printName을 부르는 객체가 없기 때문(호출하는 사람이 없음)!
