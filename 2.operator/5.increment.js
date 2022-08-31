// 증가&감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; //a = a + 1;
console.log(a);
a--;
console.log(a);

// 주의!
// 증감연산자는 연산자를 앞에 쓰는지 뒤에쓰는지에 따라 값이 달라질 수 있음
// a++  필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
// -도 똑같음
a = 0;
let b = a++; // a가 0 이니까 b에 0을 먼저 할당하고 그 이후에 연산을 실행
console.log(b);
console.log(a);

c = 1;
let d = ++c; // a를 증가 시키고 증가된 값을 c에 할당
console.log(d);
console.log(c);

e = 1;
let f = --e;
console.log(f);

g = 1;
let h = e--;
console.log(h);
