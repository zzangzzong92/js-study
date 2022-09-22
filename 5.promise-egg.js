function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.resolve(`🪴 => 🐓`);
}

getChicken()
  .catch(
    (error) => "🐔"
    // 에러를 맨 밑에다 두고 잡으려고 하면 error bubbling때문에 처음이나 중간에 문제가 생겨도 마지막에 확인이 가능하기때문에 catch를 어디에 두냐도 신경써야함
  )
  .then(fetchEgg) //.then((chicken) => fetchEgg(chicken))
  .then(fryEgg) //.then((egg) => fryEgg(egg))
  .then(console.log("완성")); //.then((friedEgg) => console.log(friedEgg));
