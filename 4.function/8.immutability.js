//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 못함! shuit
// 상태변경이 필요한 경우엔, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 한다
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리주소)
function display(num) {
  // 밑의 원시값 4가 그대로 num에 들어오고
  num = 5; // 지역변수인 num을 5로 변경, 이런식으로 절대 하면 안됨
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = "zzong"; // ❌❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경❌
  console.log(obj);
}

//변경해야 하는 경우라면
function changeName(obj) {
  // 이름부터 변경한다는 느낌을 주도록 해야한다.
  return { ...obj, name: "zzong" }; //기존의 obj를 유지하면서 새로 변경하는 것이 있다면 새로운 obj를 반환하는 식으로 해야함
}
const zzang = { name: "zzangzzong" };
displayObj(zzang);
console.log(zzang);
