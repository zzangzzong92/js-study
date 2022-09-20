// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has);
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6); // 배열은 중복해서 추가할 수 있지만 set은 중복이 불가능하기 때문에 무시된다
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set.size);

// 오브젝트 세트
const obj1 = { name: "🍎", price: 8 };
const obj2 = { name: "🍌", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// Quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs); // 변경된 가격만 바뀌고, 반복되는 것들은 담기지 않는다.

// Quiz
const obj3 = { name: "🍌", price: 5 };
objs.add(obj3);
console.log(objs); // obj는 메모리 heap에 생성되고 참조 주소가 다르기 때문에 추가가 된다
obj3.price = 8;
console.log(objs);
