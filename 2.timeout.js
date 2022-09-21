function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();
// 함수를 호출하면 1이 바로 출력이 되고, setTimeout에는 3초 타이머가 있으니까 다음인 3을 먼저 출력한뒤 3초가 지나면 2가 나옴
