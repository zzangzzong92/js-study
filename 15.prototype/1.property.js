const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log("name" in dog);
console.log(dog.hasOwnProperty("name"));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);

Object.defineProperty(dog, "name", {
  value: "멍멍",
  Writable: false, // 값을 수정 할 수 있는지
  enumerable: false, // 값을 열거할 수 있는지
  configurable: false, // 값을 수정, 삭제 할 수 있는지
});
console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "영희",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "김",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});
console.log(student);
