{
  const x = 1;
  {
    const y = 2; // 변수 y는 이 블럭 안에서만 유효
    console.log(x); // 1, 블럭 안에 x라는 변수가 있고, 또 블럭이 하나 있고 그 안에는 y가 선언이 되어있다. x는 전체적인 코드 내부에서 유효하다
  }
  console.log(x); // 1, 같은 블럭 안에 있기 때문에 x를 참조 할 수 있다
  // console.log(y); // 에러, 밖에서는 내부 y에 접근이 불가능
}

// 자식블럭에서는 부모의 블럭에 접근 할 수 있지만, 부모의 블럭에서 자식에게 접근 할 수는 없다.

const text = "global"; // 전역 변수, 전역 스코프,  global scope
{
  // 지역 변수(로컬 변수), 지역 스코프(로컬 스코프)
  const text = "inside block1"; // 내부 블럭에서 선언된 변수는 그 어떤 중첩된 자식 블럭(자식에 자식에..)에서도 접근이 가능하다
  {
    const text = "inside block2";
    console.log(text); // 상위의 text를 참조하지만, 상위 text변수를 주석처리하면 global을 참조하여 출력한다.
  }
}
