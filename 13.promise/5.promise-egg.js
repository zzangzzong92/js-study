function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => ๐ฅ`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => ๐ณ`);
}

function getChicken() {
  return Promise.resolve(`๐ชด => ๐`);
}

getChicken()
  .catch(
    (error) => "๐"
    // ์๋ฌ๋ฅผ ๋งจ ๋ฐ์๋ค ๋๊ณ  ์ก์ผ๋ ค๊ณ  ํ๋ฉด error bubbling๋๋ฌธ์ ์ฒ์์ด๋ ์ค๊ฐ์ ๋ฌธ์ ๊ฐ ์๊ฒจ๋ ๋ง์ง๋ง์ ํ์ธ์ด ๊ฐ๋ฅํ๊ธฐ๋๋ฌธ์ catch๋ฅผ ์ด๋์ ๋๋๋ ์ ๊ฒฝ์จ์ผํจ
  )
  .then(fetchEgg) //.then((chicken) => fetchEgg(chicken))
  .then(fryEgg) //.then((egg) => fryEgg(egg))
  .then(console.log("์์ฑ")); //.then((friedEgg) => console.log(friedEgg));
