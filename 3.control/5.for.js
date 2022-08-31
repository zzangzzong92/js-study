// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
// 실행순서 :
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복

for (let i = 0; i < 5; i++) {
  // i 에 0~4까지 하나씩 대입해가면서 조건에 맞춰봄
  console.log(i);
}

console.clear();

for (let i = 0; i < 5; i++) {
  // 처음 for룹에서 01234가 돌면 j 반복문이 실행된다.
  for (let j = 0; j < 5; j++) {
    // i가 0일 때 j가 조건문이 실행되고, i가 01234가 될때까지 0에 j, 1에 j, 2에 j 등등 4까지 실행
    console.log(i, j);
  }
}

// 무한루프 💩
// for (;;) {
//   console.log("😻");
// }

// 반복문 제어 : continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // continue를 만나면 continue아래의 코드를 무시하고 다음 반복으로 넘어간다 (그래서 10이 출력이 되지 않음)
    console.log("i가 드디어 10이 되었다!");
    break;
  }
  console.log(i);
}
