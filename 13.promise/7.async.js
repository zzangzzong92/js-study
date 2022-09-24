function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("No orange"));
}

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() {
  // async는 함수안의 비동기적인 절차들을 동기적으로 활용할 수 있게함
  const banana = await getBanana(); //promise를 반환하는 함수를 호출할때는 await 키워드를 써서 기다렸다가 promise값이 resolve되면 그 값을 변수에 할당
  const apple = await getApple();
  return [banana, apple]; // async를 쓴 함수의 값은 배열이 resolve하는 promise가 만들어짐
  // return getBanana().then((banana) =>
  //   getApple().then((apple) => [banana, apple])
  // );
}
fetchFruits().then((fruits) => console.log(fruits));
