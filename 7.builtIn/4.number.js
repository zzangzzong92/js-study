const num1 = 123;
const num2 = new Number(123); // 메모리 낭비
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // e+308 = 10의 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG")); // 그나라 지역의 언어

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자;
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003
// 사람은 숫자를 10진수로 계산을 하지만 JS에서는 숫자를 2진수로 각각 변환을 해서 연산을 한다 (bit)
// 2진수로 변환한 값을 다시 10진수로 변환시킨다. 이러한 과정에서 정확하게 부동 소수점까지 계산되어지지 않는다.
// 그렇기 때문에 마지막 3과 같은 작은 오차가 발생하는데, 이런 오차를 나타내는 것이 EPSILON이다.

function isEqual(original, expected) {
  return original === expected;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
