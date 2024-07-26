{
  // // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // // JavaScript 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter ?를 지정하면 문자열 타입이 아니어도 괜찮고 아예 누락해도 않아도 된다. 값이 없을 때도 있는 것에 사용(lastName의 ?: 부분)
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna");

  // Default parameter 는 값을 지정하지 않으면 기본 값으로 전달이 되어지고 옵셔널 파라미터는 값을 지정하지 않으면 undefined가 뜬다.
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter 모든 인자를 배열 형태로 받아와서 해당 배열 안에 들어간 인자의 타입을 지정해주는 것이 ...(rest)파라미터이다. 갯수와는 상관없이 동일한 타입의 데이터를 함수 인자로 전달할 때 사용
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b); // reduce 메서드를 사용해 인자 값을 전부 더해나가면 된다.
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
