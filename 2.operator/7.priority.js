let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result);
result = a++ + b * 4; // a가 할당된 다음 연산을 하기 때문에 이 문이 끝나면 a가 3으로 되어있는것이다
console.log(result);
