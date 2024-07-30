{
  // function: login -> success, fail ⏱
  type SuccessState = {
    result: "success"; // 이게 추가된 것
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 이게 추가된 것
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success", // 이게 추가된 것
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}

// 이 디스크리미네이티드 유니온 타입을 통해 좀 더 직관적인 코드 작성이 가능합니다.
