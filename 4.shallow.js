// 얕은 복사 (Shallow Copy) - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어진다
// Array.from, concat, slice, spread(...), Object.assign 등
// 새로운 object가 만들어지는것이 아니라 얕은 복사가 이루어지는 것임
// function (obj) {
// 함수 내부에서 obj를 수정하는 것은 절대절대 좋지 않다!
// }

const pizza = { name: "🍕", price: 2 };
const ramen = { name: "🍜", price: 3 };
const sushi = { name: "🍣", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);
console.clear();

store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);

pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);

// store1을 만들때 새로운 배열이 만들어지고, object가 새롭게 만들어지는게 아니고
// object가 만들어진 주소를 가리키게 된다.
// 예를들어 pizza의 주소가 0x11, ramen이 0x12 라면 store1 = [0x11, 0x12] 가 됨
// store2역시 배열만 새롭게 만들어지고 object는 동일하게 pizza와 ramen을 가리킨다
// 그 말은 배열에는 object의 주소를 가지고 있는 것이고, object를 수정한다면 주소값을 가지고 있는 배열의
// object에도 변경사항이 반영된다.
// item을 추가 삭제 복사, 다른 배열에 추가 전달 이런 것들을 할 때, object는 메모리주소가 전달되는 것이다.
