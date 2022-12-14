// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: 'π`); // κ°μ²΄ μμμ λ΄ μμ μκ² μ κ·Όν  λμλ thisλ₯Ό μ¬μ©ν΄μΌ νλ€
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: 'π`); // κ°μ²΄ μμμ λ΄ μμ μκ² μ κ·Όν  λμλ thisλ₯Ό μ¬μ©ν΄μΌ νλ€
//   },
// };

// μμ±μ ν¨μ
function Fruit(name, emoji) {
  // μμ±μ ν¨μλ μμνλ μ²«κΈμκ° λλ¬Έμ!
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // μλ΅κ°λ₯! jsκ° μλμΌλ‘ return ν΄μ£ΌκΈ° λλ¬Έ
}

const apple = new Fruit("apple", "π");
const orange = new Fruit("orange", "π");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);
