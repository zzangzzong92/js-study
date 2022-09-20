// 논리연잔사 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: "dog" };
const obj2 = { name: "cat", owner: "zzang" };

if (obj1 && obj2) {
  // 모든 값들이 true여야함
  console.log("둘 다 true!");
}

if (obj1 || obj2) {
  // 조건중에 하나만 true여도됨, 앞의것이 true이면 바로 반환, 앞의것이 false이면 뒤의 것을 검사함
  console.log("둘 다 true!");
}

let result = obj1 && obj2;
console.log(result);
// 조건문 밖에서 쓰면 obj1이 true니까 나머지 하나가 남았으니 obj2는 굳이 검사를 하지 않는(평가가 단축됨) 대신 result에 할당해준다

result = obj1 || obj2;
console.log(result);
//obj1이 true니까 굳이 뒤의 것은 검사를 하지 않고 obj1을 result에 할당

// 활용예
// && 조건이 truthy 일때, 무언가를 해야 할 경우
// || 조건이 falshy 일때, 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐주인!";
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인!";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // obj1이 falshy였기 때문에 뒤의 조건이 실행되지 않음
console.log(obj2); // obj2가 trueshy였기 때문에 뒤의 조건이 실행

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // 강아지 객체는 주인이 없기 때문에 첫 번째 조건이 falshy이므로 뒤의 조건이 실행
console.log(obj2); // 고양이 객체는 주인이 있기 때문에 첫 번째 조건이 trushy이므로 뒤의 조건이 실행되지 않음

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || "Hello";
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
