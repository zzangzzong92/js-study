/** 변수규칙
 *  라틴문자(0-9, a-z, A-Z) ...
 *  대소문자를 구분한다
 *  추천 : camelCase (likeThis)
 *  한국어를 써도 동작은 하지만, 항상 영어로!
 *  예약어는 절대 사용하지 말기!
 *  숫자로 시작하는 방식도 금지
 *  특수문자 사용 금지 (but _ 언더스코어, $는 예외)
 *  이모지 사용 금지
 *  여러개의 변수를 1,2,3 등 숫자로 구분하지 않기 => 최대한 의미있고, 구체적인 이름으로!
 */

let apple;

//나쁜예제
let number = 20;
let audio1;
let audio2;

//좋은예제
let myAge = 31;
let backgroundAudio;
let windAudio;

// 팁
let audioBackground; //구체적인부분을 뒤로 빼기
let audioWind;

//뭐가 좋아지나면 나중에 audio만 쳐도 변수를 바로 사용가능
