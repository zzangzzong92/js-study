// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("종현", "장");
student.firstName = "현종";
console.log(student.firstName);
console.log(student.fullName); // get
student.fullName = "김철수"; // set 김철수가 인자로 전달된다
