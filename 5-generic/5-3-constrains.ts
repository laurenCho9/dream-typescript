interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭이긴 제네릭인데 T 타입은 Employee를 확장한 애들만 가능해 (이런식으로 제한을 둬야 좀 더 일반화된 제네릭 사용이 가능)
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

// T 라는 object 타입을 받아서, 대신 K라는 것은 그 obj 안에 해당하는 키 중 하나여야 하고, 리턴되는 것은 그 obj에 있는 그 key가 가르키고 있는 value 타입이어야 한다고 명시하는 것.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
