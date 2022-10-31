// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// 정적으로 인스턴스가 만들어진 시점에 this가 결정됨(변경될 수 없음)
// 하지만, JS에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name; //this는 앞으로 반들어질 오브젝트의 자신(15의 인자값)을 가리킴
  this.printName = function () {
    console.log(`고양이 이름을 출력한다옹 : ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름을 출력한다멍 : ${this.name}`);
  };
}

const cat = new Cat("야옹"); //"야옹" : this.name
const dog = new Dog("멍멍"); //new Dog이라고 선언하는 순간 { }빈 객체가 생성되고 this를 이용해 인자값과 함수를 연결한다
cat.printName();
dog.printName();

// JS에서 caller에 따라 동적으로 this가 동적으로 결정되는 경우
dog.printName = cat.printName;
dog.printName(); // 고양이의 이름을 출력한다옹 : 멍멍 으로 출력됨
//dog 객체에서 . (내가 호출), dog의 this로 동적 변환이 되면서 dog의 this.name이 나오는걸 확인할 수 있다

//이것이 왜 문제가 되는 것일까?
function printOnMonitor(printName) {
  console.log("모니터를 준비하고!, 전달된 콜백을 실행!");
  printName();
}
printOnMonitor(cat.printName); //undefined. 이유는 printOnMonitor함수에서 printName을 부르는 객체가 없기 때문(호출하는 사람이 없음)!
