// null, undefined
let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

console.log(typeof null); // null은 js 자체에서 null이라는 것을 표현하기 위해 object를 만든다. null을 할당하면 메모리 상에 null이라는 오브젝트가 할당되어 들어가기 때문에 비어있음을 나타낼 수 있다.
console.log(typeof undefined); // 변수를 정의만 해놓으면 메모리상에 아무것도 없음
