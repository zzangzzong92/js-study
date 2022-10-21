// 동결. Object.freeze 동결된 객체는 추가, 삭제, 쓰기, 속성 재정의가 불가능하게 된다
// (단, 얕은 동결이 된다. shallow freeze!)
const zzong = { name: "종현" };
const dog = { name: "와우", emoji: "🐶", owner: zzong };
Object.freeze(dog);
dog.name = "멍멍";
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
zzong.name = "짱쫑";
console.log(dog);

// 밀봉! Object.seal - 값의 수정은 가능하나!  추가, 삭제, 속성 재정의는 불가능
const cat = { ...dog };
// Object.assign(cat, dog); // spread 연산자를 사용해도 가능, assign()을 사용해도 가능
console.log(cat);
Object.seal(cat);
console.log(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji; // 삭제가 되지 않음
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));

// 확장 금지 preventExtensions - 추가만 불가능
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = "어흐응";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
