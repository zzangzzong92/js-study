// 정직원과 파트타임직원을 나타낼 수 있는 클래스
// 직원 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산
// 정직원은 시간당 10000원
// 파트타임은 시간당 8000원
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

const zzong = new FullTimeEmployee("장종현", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(zzong.calculatePay());
console.log(bob.calculatePay());
