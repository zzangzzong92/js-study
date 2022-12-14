const fruits = ["π", "π", "π", "π"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// λ°°μ΄μ λλ©΄μ μνλ κ²(μ½λ°±ν¨μ)μ ν λ
// forEach - λ°°μ΄μ μμλ§λ€ μ£Όμ΄μ§ μλ¬΄λ₯Ό μν
fruits.forEach(function (value, index, array) {
  // μ½λ°±ν¨μμ μΈμλ λ°°μ΄μ μμμ indexμ λ°°μ΄μ μ²΄λ₯Ό μ λ¬ν΄μ€, μ¬μ©νμ§ μλ μΈμλ μλ΅κ°λ₯
  console.log("----------");
  console.log(value);
  // console.log(index);
  // console.log(array);
});

fruits.forEach((value) => console.log(value));
console.clear();

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
const item1 = { name: "π₯", price: 2 };
const item2 = { name: "πͺ", price: 3 };
const item3 = { name: "π", price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => {
  return value.name === "πͺ";
});
// const found = products.find((value) => value.name === "πͺ");
// κ°μ΄ λ°λ‘ return λλ κ²½μ°μλ return μλ΅κ°λ₯
// μ‘°κ±΄μ λ§λ λ°μ΄ν°λ₯Ό μ°Ύμμ κ·Έ λ°μ΄ν°λ₯Ό λ°νν΄μ£Όλ κ²μ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
console.log(result);

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((value) => value.name === "πͺ");
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((item) => item.name === "πͺ");
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((item) => item.name === "πͺ");
console.log(result);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘
result = products.filter((item) => item.name === "πͺ");
console.log(result);

console.clear();

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: μ€, λ°°μ΄μ λ©μλ μ€ flatμ mapμΌλ‘ νμ©νλ€κ³  μκ°νμ
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["zzang", "zzong"].flatMap((text) => text.split(""));
console.log(result);

// sort - λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ["hi", "abc"];
texts.sort();
console.log(texts); // μνλ²³ aλΆν° μΆλ ₯

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // 0, 1, 10, 2, 4, 5 - 1λ€μ 10μ΄ λμ€λ μ΄μ λ 10μ 1μ λ¨Όμ  μΈμνκΈ° λλ¬Έμ΄λ€
// < 0 aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
// > 0 bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b); // λ°°μ΄μ μ«μ νλμ© κ°μ Έμμ λΉΌλ©΄μ λΉκ΅νκ²λ λ§λ€μ΄μ€λ€.
console.log(numbers);

// reduce - λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ νλμ κ°μΌλ‘
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
// result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
