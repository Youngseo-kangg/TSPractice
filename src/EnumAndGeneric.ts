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
// * ts배열은 모든 타입의 객체를 가질 수 있지만, 제네릭 타입은 Array<Person> 처럼 배열에서 허용되는 특정 타입을 지정해야 함
let genericArr1: Array<number>; // 제네릭 Array<>키워드로 기호 안에 타입 파라미터를 지정하거나,
let genericArr2: number[]; // number[]처럼 배열 요소의 타입을 직접 지정할 수도 있음
// ? 배열 내 모든 요소가 같은 타입을 가지면 genericArr2처럼, 배열 내 요소가 서로 다른 타입을 저장한다면 genericArr1처럼
let genericArr3: Array<number | string>; // 이게 더 보기 좋음!

class Drink {
  name: string;
}
class Water extends Drink {
  code: number;
}
class Haribo {
  name: string;
  flavor: string;
}

const cart: Array<Drink> = []; // ? <Drink>파라미터가 추가된 제네릭 배열은 Drink또는 상응하는 타입의 인스턴스만 저장
cart[0] = new Drink();
cart[1] = new Water();
cart[2] = new Haribo();
cart[3] = { name: 'sprite' }; // 객체 리터럴도 가능
// Haribo에 name 프로퍼티 없으면 오류 발생 ... 'Jelly타입은 Drink타입에 할당할 수 없습니다. Drink 내 해당 프로퍼티 이름이 없습니다"
// ? TS는 구조적 타입 시스템을 사용해 타입 구조가 유사한 타입 객체를 다른 타입의 변수에 할당할 수 있음
// ? Drink와 Jello는 동일한 타입이 아니지만, 타입의 상호 호환이 가능함
// Drink 타입 변수는 name이라는 프로퍼티를 갖는 객체를 예상하며, Haribo 타입 역시 name 프로퍼티를 갖고 있음

// * 다양한 타입의 값을 취하는 함수를 만들 수 있으나, 호출 중에 구체적인 타입을 명시적으로 작성해야 함
// * 제네릭은 js에서 지원하지 않아 js로 컴파일 된 코드에선 볼 수 없음 -> 타입 파라미터를 사용하는것이 안전함

// TODO : 제네릭 인터페이스
interface Comparator<T> {
  // compareTo(value:any): number; // ? 만약 사각형 비교 알고리즘에 삼각형을 넣게 된다면 -> 파라미터 타입이 any이기 때문에 런타임 오류가 발생할 것 ... 컴파일단계에서 오류 알 수 있도록 해줘야 함
  compareTo(value: T): number; // ? 컴파일 단계에서 오류를 인지할 수 있게 됨
}

class Rectangle implements Comparator<Rectangle> {
  // compareTo(value: any): number {
  compareTo(value: Rectangle): number {
    // 사각형 비교 알고리즘
    return 1;
  }
} // 사각형 전용 넓이비교함수 Rectangle.compareTo

class Triangle implements Comparator<Triangle> {
  // compareTo(value: any): number {
  compareTo(value: Triangle): number {
    // 삼각형 알고리즘
    return 2;
  }
} // 삼각형 전용 넓이비교함수 Triangle.compareTo

class Programmer implements Comparator<Programmer> {
  constructor(public name: string, private salary: number) {}

  compareTo(value: Programmer): number {
    return this.salary - value.salary;
  }
}

const prog1: Programmer = new Programmer('John', 20000);
const prog2: Programmer = new Programmer('Alex', 30000);

prog1.compareTo(prog2) > 0
  ? console.log(`${prog1.name} is richer`)
  : prog1.compareTo(prog2) == 0
  ? console.log(`${prog1.name} and ${prog1.name} earn the same amounts`)
  : console.log(`${prog1.name} is poorer`);
// "John is poorer"

// TODO : 제네릭 함수 생성
// * 함수 파라미터 타입과 반환 값 타입에 동일한 문자 T를 사용하면 함수 호출 중 상세타입이 사용되어도 반환 값의 타입이 동일하도록 제한함
function printMe<T>(content: T): T {
  console.log(content);
  return content;
}
// ? 위 함수를 화살표함수로 사용한다면
const printMeArrow = <T>(content: T): T => {
  console.log(content);
  return content;
};

const genericF1 = printMe('Hello'); // "Hello" ... 문자열 파라미터로 printMe 호출
const genericF2 = printMeArrow('Hello'); // 화살표함수로 호출
const genericF3 = printMe<string>('Hello'); // 명시적 타입 추가 가능하지만 필요는 없음
class Printer {
  constructor(public name: string) {}
}
const genericF4 = printMe(new Printer('Joe')); // Printer {name: 'Joe'}

// TODO : 제네릭 타입을 사용한 클래스와 함수
class Pair<K, V> {
  // key, value
  constructor(public key: K, public value: V) {}
} // 처음에는 K,V등 특정 문자로 제네릭 타입 파라미터를 사용하다가, Pair클래스를 선언하고 컴파일 하면 K와 V가 삭제되고 선언된 타입으로 대체됨
function comparePair<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
  return pair1.key === pair2.key && pair1.value === pair2.value;
}

let pair1: Pair<number, string> = new Pair(1, 'Apple');
let pair2 = new Pair(1, 'Orange');
// ? 상세 파라미터를 명시적으로 지정
console.log(comparePair<number, string>(pair1, pair2)); // false

let pair3 = new Pair('first', 'apple');
let pair4 = new Pair('first', 'apple');
// ? 상세 파라미터 암시
console.log(comparePair(pair3, pair4)); // true

// TODO : 문자열 열거 타입 멤버를 반환된 사용자 역할에 맵핑하는 제네릭 함수
interface Manager {
  name: string;
  role: UserRole;
}

enum UserRole {
  Administrator = 'admin',
  Manager = 'manager',
}

function loadUser<T>(): T {
  // 제네릭 함수 선언
  return JSON.parse('{ "name": "john", "role": "admin" }');
}

const user = loadUser<Manager>(); // 제네릭 함수 호출 + 여기서 Manager타입 사용
// 반환되는 제너릭 타입 T는 상세타입 Manager로 바뀌게 됨

switch (user.role) {
  case UserRole.Administrator:
    console.log('Show control panel');
    break;
  case UserRole.Manager:
    console.log('Hide control panel');
    break;
}
// "Show control panel"

// TODO : 고차함수 내 반환 타입 강제
const outerFunc = (someValue: number) => (multiplier: number) =>
  someValue * multiplier;
const innerFunc = outerFunc(10);
let result = innerFunc(5);
console.log(result); // 50

// * 파라미터 타입이 다른 고차함수가 호출되더라도 동일한 함수 시그니처를 반환하는 고차함수
type numFunc<T> = (arg: T) => (x: number) => number;

// 파라미터가 없는 함수 호출
const noArgFunc: numFunc<void> = () => (c: number) => c + 5;
// 숫자 파라미터를 가진 함수 호출
const numArgFunc: numFunc<number> =
  (someValue: number) => (multiplier: number) =>
    someValue * multiplier;
// 문자열 파라미터를 가진 함수 호출
const stringArgFunc: numFunc<string> =
  (someText: string) => (padding: number) =>
    someText.length + padding;
// 컴파일 오류 ... numFunc는 다른 시그니처야함.
// const createSumString: numFunc<number> = () => (x: number) => 'Hello'; //error
