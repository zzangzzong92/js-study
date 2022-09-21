let count = 0;
// export let count = 0; 변수도 내보낼 수 있음
export function increase() {
  // export default는 모듈에서 선택한 '하나만' 내보낸다는 의미
  // 여러가지를 내보내려면 default는 사용할 수 없다
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
