function loop() {
  const array = [];
  //var과 let의 차이점
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

// function loop() {
//   const array = [];
//   //var과 let의 차이점
//   for (var i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop();
// array.forEach((func) => func());

// var는 블록 스코프가 없기 때문에 i가 증가하더라도 5에 접근하게 된다
// 그래서 var는 아래와 같은 코드이다
// function loop() {
//   const array = [];
//   var i;
//   //var과 let의 차이점
//   for (i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop();
// array.forEach((func) => func());
