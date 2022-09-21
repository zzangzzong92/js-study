// Bubbling up, Propagating
function a() {
  throw new Error("error!");
}

function b() {
  try {
    // 상황에 따라 에러를 더 근접한 곳에서 잡을 수 있음
    a();
  } catch {
    console.log("내 생각엔 이 에러를 내가 핸들링 할 수 없을거 같다");
    throw error; // 에러를 다시 던질 수 있음
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
}
console.log("Done!");
