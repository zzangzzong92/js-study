const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: 'π`); // κ°μ²΄ μμμ λ΄ μμ μκ² μ κ·Όν  λμλ thisλ₯Ό μ¬μ©ν΄μΌ νλ€
  },
};

apple.display();
