const map = new Map([
  ["key1", "๐"],
  ["key2", "๐"],
]);
console.log(map);

// ์ฌ์ด์ฆ ํ์ธ
console.log(map.size);

// ์กด์ฌํ๋์ง ํ์ธ
console.log(map.has("key1"));
console.log(map.has("key2"));

// ์ํ
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// ์ฐพ๊ธฐ
console.log(map.get("key1"));
console.log(map.get("key2"));
console.log(map.get("key4"));

// ์ถ๊ฐ
map.set("key3", "๐ฅ");
console.log(map);

// ์ญ์ 
map.delete("key3");
console.log(map);

// ์ ๋ถ์ญ์ 
map.clear();
console.log(map);

// ์ค๋ธ์ ํธ์์ ํฐ ์ฐจ์ด์ ?
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "๋ง์๋์ฐ์ " };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

// 1. obj์ map์ ์ฌ์ฉํ  ์ ์๋ ํจ์๊ฐ ๋ค๋ฆ
// 2. obj์์๋ key๋ฅผ ๋์ ์ผ๋ก ์ ๊ทผํ  ์ ์์ง๋ง map์ key๋ฅผ ์ด์ฉํด์ ์ ๊ทผํ  ์ ์์ (map์ get์ ์ด์ฉํด์ ์ ๊ทผ)
