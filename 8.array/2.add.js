const fruits = ["๐", "๐", "๐", "๐"];

// ๋ฐฐ์ด ์์ดํ์ ์ฐธ์กฐํ๋ ๋ฐฉ๋ฒ
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ (์ง์)
fruits[4] = "๐";
console.log(fruits);
// ์ธ๋ฑ์ค๋ฅผ ์ด์ฉํด์ ์ถ๊ฐํ๊ฒ ๋๋ฉด ์ํ๋ ์๋ฆฌ์ ์ด๋ฏธ ์๋ ๋ฐ์ดํฐ๊ฐ ๋ฎ์ด์์์ง ์ ์๊ณ 
// ๋ ์์ ์๋ฆฌ์ ๋ฃ๊ฒ ๋๋ฉด ๊ฐ์ด๋ฐ๋ empty item์ด๋ผ๋ ๋น ๊ณต๊ฐ์ด ์๊ธด๋ค

delete fruits[1];
console.log(fruits);
// delete์ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ๊ฒ ๋๋ฉด ์ญ์ ๋ ์๋ฆฌ์ empty item์ด๋ผ๋ ๋น ๊ณต๊ฐ์ด ๋จ๋๋ค
