const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: '🍎`); // 객체 안에서 내 자신에게 접근할 때에는 this를 사용해야 한다
  },
};

apple.display();
