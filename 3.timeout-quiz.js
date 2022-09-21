// 주어진 seconds(초)가 지나면 cllback함수를 호출
// 단, seconds가 0보다 작으면 에러를 던지게!
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback함수를 전달 해야 함");
  }
  if (!seconds || seconds < 0) {
    throw new Error("seconds는 0보다 커야 함");
  }
  setTimeout(callback, seconds * 1000);
}

runInDelay(() => {
  console.log("타이머 완료");
}, 2);

try {
  runInDelay(() => {
    console.log("타이머 완료");
  }, 2);
} catch (error) {}
