// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value; // 현재의 값을 읽기만 할 수 있음
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
