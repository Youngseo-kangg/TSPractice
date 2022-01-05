// TODO : Enum (열거타입) - 숫자열 열거
// * 열거 타입: 일정 수의 상수로 구성된 집합으로 숫자나 문자열을 사용할 수 있음.
// ? 높은 가독성이 필요하고, 일정 집합에만 값을 배정하고 싶으며, 데이터 저장을 효율적으로 하고 싶은 상황에서 사용할 것
enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
} // 숫자값으로 enum멤버 초기화
// ? 기본적으로 열거 타입은 0부터 시작 ... Monday를 1로 초기화 하지 않으면 자동으로 첫번째 값은 0이 됨.
enum WeekdaysAuto {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
} // ? 나머지 값으로 자동으로 1씩 증가된 값이 할당됨

let dayOff = Weekdays.Tuesday; // ? 각 enum 멤버는 점 표기법으로 참조 가능
console.log(Weekdays[4]); // ? 숫자 열거 타입의 역방향 조회도 가능 ... Thursday 출력됨

// * Enum을 통해 잘못된 값을 전달하는 실수 방지 가능
enum Direction {
  FtoC,
  CtoF,
}

function convertTemperature(temp: number, fromTo: Direction): number {
  return Direction.FtoC === fromTo
    ? ((temp - 32) * 5.0) / 9.0
    : (temp * 9.0) / 5.0 + 32;
}

console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);
// console.log(`35C is ${convertTemperature(35, 'ABCD')}F`); // Enum으로 지정해 주지 않으면 false경우에 들어가 실행됨 ... Enum으로 타입 에러 잡아주기 필요

// TODO : Enum (열거타입) - 문자열 열거
enum Directions {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
} // 문자열 값으로 enum 멤버 초기화 + 문자열 열거 타입은 역방향 조회 불가

function move(where: Directions) {
  if (where === Directions.Up) {
    console.log('moving up');
  } else if (where === Directions.Down) {
    console.log('moving down');
  } else if (where === Directions.Left) {
    console.log('moving left');
  } else if (where === Directions.Right) {
    console.log('moving right');
  }
}

// ? enum말고 union타입, 커스텀 타입으로도 대체 \가능함
function moveUnion(where: 'Up' | 'Down' | 'Left' | 'Right') {
  console.log(`${where} : union타입으로 선언`);
}
type DirectionsCustomType = 'Up' | 'Down' | 'Left' | 'Right';
function moveCustomType(where: DirectionsCustomType) {
  console.log(`${where} : custom 타입으로 선언`);
}

// move("North"); // "North"타입인 파라미터를 "Directions"타입 파라미터에 할당할 수 없습니다.
move(Directions.Up); // "moving up"

// TODO : const enum의 사용
// * const enum을 사용하면 자바스크립트가 생성되지 않음
// const, enum을 함께 사용해야 js코드가 더 정확해지지만, js에서는 const enum에 해당되는 것이 없음을 인지해야 함
// const enum을 사용하게 되면 특정 값으로 숫자 열거 타입 멤버의 이름을 찾을 수 없게 됨

enum Roses {
  Red = 'Red',
  Yellow = 'Yellow',
  Pink = 'Pink',
}
console.log(Roses.Pink);

const enum Lily {
  White = 'White',
}
console.log(Lily.White); // js 컴파일 파일 보면 일반 enum처럼 지정해 주는 부분이 없음
const enum RandomNumber {
  a = 1,
  b = 2,
}
console.log(RandomNumber.a); // 1
// console.log(RandomNumber[1]); // "const 열거형 멤버는 문자열 리터럴을 통해서만 엑세스할 수 있습니다"

// TODO : 제네릭
// * 제네릭을 사용하면 다양한 타입을 지원하는 함수를 작성할 수 있음
