// 조건문 Conditional Statement
// switch
// if else if else if else if .... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 3; // 0:월요일, 1: 화요일 ... 6: 일요일
let dayName;
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
}

switch (day) {
  case 0:
    dayName = "월요일";
    break;
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  case 5:
    dayName = "토요일";
    break;
  case 6:
    dayName = "일요일";
    break; // break를 사용하여 멈추지 않으면 case를 계속 넘어가서 제일 마지막의 일요일이 출력된다
  default:
    console.log("해당하는 요일이 없음"); //switch case 문의 else 같은느낌!!
}

console.log(dayName);

let condition = "bad"; // okay, good => 좋음!, bad => 나쁨!
let text;
switch (condition) {
  case "okay":
  case "good": // 여러 케이스별로 하나의 결과를 나타내야할 때
    text = "좋음";
    break;
  case "bad":
    text = "나쁨";
    break;
}
console.log(text);
