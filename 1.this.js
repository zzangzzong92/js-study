"use strict"; //엄격모드를 이용하면 함수 내부에서 this는 없으니(함수의 scope내의 this가 없음) undefined이 출력됨
/**
 * 글로벌 컨텍스트의 this
 * - 브라우저 :
 * - 노드 :
 */
const x = 0;
module.exports.x = x;
console.log(this);
//전역에서 this란 window라면 this와 globalThis가 동일한 window객체를 가르킴
//노드에서 this란 module을 가르키고 있고 globalThis는 global 객체를 가르키는 것이다
//하지만 엄격모드에서는 undefined이 나온다
console.log(globalThis); // 노드에서 사용할 수 있는 전역 객체
// globalThis.setTimeout()
// setTimeout(); //위의 코드와 같은 것 globalThis생략가능
console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log(this); //globalThis가 출력됨
}
fun();
//브라우저상에서는 window가 출력된다.

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 *
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name); //생성자 안의 name을 가리키지만 엄밀하게 말하면 앞으로 생성될 인스턴스(cat1의 냐옹)를 가르키는 것이다.
  };
}
const cat1 = new Cat("냐옹");
const cat2 = new Cat("냐아옹");
cat1.printName();
cat2.printName();
