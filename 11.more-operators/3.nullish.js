// Nullish Coalescing Operator
// ES11 (ECMAScript2020)
// ?? null, undefined
// || falshy한 경우 설정(할당)
let num = 0;
console.log(num || -1); // 0은 falshy한 값으로 인식되어 -1이 출력된다
console.log(num ?? -1);
