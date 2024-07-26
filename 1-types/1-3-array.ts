{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} // readonly 읽기전용을 사용할 때 string[] 이 방식을 사용해야 하므로(제네릭 방식인 Array<string> 은 아직 허용되지 않고 있다.) 코드의 일관성을 유지하려면 string[] 이 방식을 쓰는 게 낫다.

  // 튜플은 배열은 배열인데 서로 다른 타입을 한번에 가질수있는 배열이다. 권장하지 않습니다. 인덱스에 접근하는 방식이 정말 가독성이 떨어지기 때문
  // Tuple -> interface, type alias, class같은 아이들로 대체해서 사용하는 게 좋습니다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // 이게 그나마 가독성 문제를 대체할 수 있는 방법이기는 함(그래도 여전히 데이터가 정해진 곳이 아니라 데이터를 사용하는 곳에서 임의로 name과 age로 이름을 결정하고 써야하는 단점은 여전히 존재)
}
// 그럼 Tuple은 언제 사용할까?
// 내가 무언가 동적으로 return하는데 class나 interface로 묶기가 애매하고, 동적으로 뭔가 좀 관련있는 다른 타입의 데이터를 묶어서 사용자가 이름을 정의해서 쓸 경우에는 튜플이 유용할 수 있지만 그 외의 경우라면 일반적인 타입을 정의하고 쓰는 경우에는 내가 interface나 type alias를 쓸 수 있진 않은지 잘 생각하고 사용해야 합니다.
