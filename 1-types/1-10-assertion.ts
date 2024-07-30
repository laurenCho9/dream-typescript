{
  /**
   * Type Assertions 💩 - 타입 어썰션, 지양해야하지만 어쩔 수 없이 써야할 때도 있다. 함수 사용시
   * 정말정말 장담하는 경우가 아니라면 사용하지 않는 게 좋다.
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // 나는 스트링이라고 장담했는데 실행하는 순간 숫자를 불러올 때 undefined 발생
  console.log((result as string).length); // 작성 방식의 차이
  console.log((<string>result).length); // 작성 방식의 차이

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // 정확해! 이건 절대절대 number 타입 값이야! 100% 장담해 라는 의미.(이것도 최대한 안쓰는 게 좋다.) 함수 뒤가 아닌 아래에 number!.push(2); 라고 작성해도 된다.
  numbers.push(2); // 😱

  const button = document.querySelector("class")!;
}
