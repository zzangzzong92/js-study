function a() {
  for (let i = 0; i < 1000000000; i++);
  // 함수 내부에서 시간이 오래걸리는 작업을 수행하면  끝날때까지 다음 작업이 수행되지 않음 (동기)
  // JS는 동기적으로 실행되기때문에 무거운 작업을 수행하는 것은 좋지 못하다
  return 1;
}

function b() {
  return a() + 1;
}
function c() {
  return b() + 1;
}

console.log("작업시작");
const result = c();
console.log(result);
// 변수가 c함수를 호출하고 있으니 c를 호출하는데 c안에는 b함수가 호출되어 b로 갔더니 a함수가 호출되어 a까지 올라간다.
// 결국 c부터 a까지의 함수가 callstack에 쌓인다
// a함수가 1을 반환해서 b로가고 b의 로직처리가 되면 c로가서 최종적인 c의 결과값이 출력됨
