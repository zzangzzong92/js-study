function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    // promise함수는 두 가지 인자를 받아와 처리하는 callback함수를 넣어줘야한다. resolve 성공, reject 실패
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
    // setTimeout(resolve, seconds * 1000)
  });
}

runInDelay(20)
  .then(() => {
    console.log("타이머 완료!");
  })
  .catch(console.error)
  .finally(() => console.log("끝났다!"));
