/**
 * Type Inference - 변수선언시의 값은 담긴 것이 명확하므로 생략해주어도 되지만, 타입추론 보다는 정확히 타입을 명시하는 게 좋다고 생각합니다. 또한 팀프로젝트 시 정확한 스타일가이드를 명시해서 void는 생략한다. 함수에는 반드시 타입 명시를 하는 게 좋다 등 지정하는 게 좋겠습니다.
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
