// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == "2");
console.log(2 === "2"); // 코딩을 할 때 웬만하면 타입도 함께 검사하는 것이 좋음
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); // 이것이 false가 나오는 이유는 메모리주소가 다르기 때문
// key와 value가 같아도 엄연히 새로운 obj를 만든것이기 대문에 메모리주소가 다름
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

const obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
