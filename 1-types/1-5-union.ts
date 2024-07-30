{
  /**
   *  Union Types: OR - 발생할 수 있는 모든 케이스 중의 하나만 할당할 수 있을 때 쓰면 좋다. (활용도 높은 타입)
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // function login(id: string, password: string): Promise<LoginState> { // 네트워크 통신을 하는 비동기도 해야하니까 원래는 이런식으로 해야 함
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  // function printLoginState(state: LoginState):void(:void는 생략가능) {
  function printLoginState(state: LoginState) {
    // 조건: response 라는 key가 state 안에 있다면 (그러나 좋은 방법이 아녜요 1-6 Discriminated Union 방식이 좋다)
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
