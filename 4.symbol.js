// Symbol 심벌, 심볼
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = "key";
// const key2 = "key";
const key1 = Symbol("key");
const key2 = Symbol("key");
map.set(key1, "Hello");
console.log(map.get(key2));
console.log(key1 === key2); // 원시 타입이기 때문에 값이 똑같아서 key2를 찾아도 Hello가 출력됨

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2);

console.log(Symbol.keyFor(k1)); // 레지스트리를 통해서 만들어진 Symbol만 문자열에 대한 정보를 가져올 수 있다
console.log(Symbol.keyFor(key1)); // 레지스트리를 통해 만든것이 아니기 때문에 문자열에 대한 정보를 가져올 수 없다

const obj = { [k1]: "Hello", [Symbol("key")]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol("key")]);
