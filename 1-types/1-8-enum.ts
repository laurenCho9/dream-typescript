{
  /**
   * Enum - 다른 언어에서는 유용하나, 타입스크립트에서는 쓰지 않는 것이 좋다. 왜? 타입에 값을 재할당 해도 에러가 안뜨기 때문
   * 타입스크립트에서는 이넘 대신 union 타입을 쓰는 게 더 좋다. 그러나 딱 한군데, 앱개발 시에는 코틀린, 스위프트 등을 js로 묶어서 클라이언트에 보내야할 때 다른언어와 소통해야할 때는 서로 이해할 수 있게 이넘을 이용해야 하지만 그게 아니라면 유니온으로 얼마든지 대체 가능하고 유니온을 쓰는 게 좋다.
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  // day = 10; // 아무런 이슈 없이 컴파일러에서 동작하는 게 문제! 강의에서는 그런데 버전업 되면서 에러 출력이 나오기는 한다.
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
