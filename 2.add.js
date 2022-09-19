const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 (지양)
fruits[4] = "🍓";
console.log(fruits);
// 인덱스를 이용해서 추가하게 되면 원하는 자리에 이미 있는 데이터가 덮어씌워질 수 있고
// 더 앞의 자리에 넣게 되면 가운데는 empty item이라는 빈 공간이 생긴다

delete fruits[1];
console.log(fruits);
// delete을 사용하여 데이터를 삭제하게 되면 삭제된 자리에 empty item이라는 빈 공간이 남는다
