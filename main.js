// import increase from "./counter.js"; //export default로 내보내지면 이렇게 사용 (이름은 내 마음대로 사용가능)
import { increase, getCount } from "./counter.js"; // export로 내보내진걸 가지고올때는 이렇게 사용 (가지고올 이름을 똑같이 해야함)
// import {increase as increase1 } from "./counter.js"; // 이름을 내가 원하는대로 바꾸려면 as를 사용
import * as counter from "./counter.js"; // counter에 있는 모든 것들을 가지고 올 수 있음
increase();
increase();
increase();
console.log(getCount());
console.log(counter.getCount());
