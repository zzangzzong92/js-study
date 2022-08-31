//불리언 타ㅂ
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isFree);
console.log(isActivated);
console.log(isEntrolled);

// Falshy 거짓인 값
console.log(!!0); // !!는 값을 true나 false 값으로 변환해줌, 0은 기본적으로 false
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
