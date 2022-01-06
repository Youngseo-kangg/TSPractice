"use strict";
// TODO : Enum (열거타입) - 숫자열 열거
// * 열거 타입: 일정 수의 상수로 구성된 집합으로 숫자나 문자열을 사용할 수 있음.
// ? 높은 가독성이 필요하고, 일정 집합에만 값을 배정하고 싶으며, 데이터 저장을 효율적으로 하고 싶은 상황에서 사용할 것
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {})); // 숫자값으로 enum멤버 초기화
// ? 기본적으로 열거 타입은 0부터 시작 ... Monday를 1로 초기화 하지 않으면 자동으로 첫번째 값은 0이 됨.
var WeekdaysAuto;
(function (WeekdaysAuto) {
    WeekdaysAuto[WeekdaysAuto["Monday"] = 1] = "Monday";
    WeekdaysAuto[WeekdaysAuto["Tuesday"] = 2] = "Tuesday";
    WeekdaysAuto[WeekdaysAuto["Wednesday"] = 3] = "Wednesday";
    WeekdaysAuto[WeekdaysAuto["Thursday"] = 4] = "Thursday";
    WeekdaysAuto[WeekdaysAuto["Friday"] = 5] = "Friday";
    WeekdaysAuto[WeekdaysAuto["Saturday"] = 6] = "Saturday";
    WeekdaysAuto[WeekdaysAuto["Sunday"] = 7] = "Sunday";
})(WeekdaysAuto || (WeekdaysAuto = {})); // ? 나머지 값으로 자동으로 1씩 증가된 값이 할당됨
let dayOff = Weekdays.Tuesday; // ? 각 enum 멤버는 점 표기법으로 참조 가능
console.log(Weekdays[4]); // ? 숫자 열거 타입의 역방향 조회도 가능 ... Thursday 출력됨
// * Enum을 통해 잘못된 값을 전달하는 실수 방지 가능
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
function convertTemperature(temp, fromTo) {
    return Direction.FtoC === fromTo
        ? ((temp - 32) * 5.0) / 9.0
        : (temp * 9.0) / 5.0 + 32;
}
console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);
// console.log(`35C is ${convertTemperature(35, 'ABCD')}F`); // Enum으로 지정해 주지 않으면 false경우에 들어가 실행됨 ... Enum으로 타입 에러 잡아주기 필요
// TODO : Enum (열거타입) - 문자열 열거
var Directions;
(function (Directions) {
    Directions["Up"] = "Up";
    Directions["Down"] = "Down";
    Directions["Left"] = "Left";
    Directions["Right"] = "Right";
})(Directions || (Directions = {})); // 문자열 값으로 enum 멤버 초기화 + 문자열 열거 타입은 역방향 조회 불가
function move(where) {
    if (where === Directions.Up) {
        console.log('moving up');
    }
    else if (where === Directions.Down) {
        console.log('moving down');
    }
    else if (where === Directions.Left) {
        console.log('moving left');
    }
    else if (where === Directions.Right) {
        console.log('moving right');
    }
}
// ? enum말고 union타입, 커스텀 타입으로도 대체 \가능함
function moveUnion(where) {
    console.log(`${where} : union타입으로 선언`);
}
function moveCustomType(where) {
    console.log(`${where} : custom 타입으로 선언`);
}
// move("North"); // "North"타입인 파라미터를 "Directions"타입 파라미터에 할당할 수 없습니다.
move(Directions.Up); // "moving up"
// TODO : const enum의 사용
// * const enum을 사용하면 자바스크립트가 생성되지 않음
// const, enum을 함께 사용해야 js코드가 더 정확해지지만, js에서는 const enum에 해당되는 것이 없음을 인지해야 함
// const enum을 사용하게 되면 특정 값으로 숫자 열거 타입 멤버의 이름을 찾을 수 없게 됨
var Roses;
(function (Roses) {
    Roses["Red"] = "Red";
    Roses["Yellow"] = "Yellow";
    Roses["Pink"] = "Pink";
})(Roses || (Roses = {}));
console.log(Roses.Pink);
console.log("White" /* White */); // js 컴파일 파일 보면 일반 enum처럼 지정해 주는 부분이 없음
console.log(1 /* a */); // 1
// console.log(RandomNumber[1]); // "const 열거형 멤버는 문자열 리터럴을 통해서만 엑세스할 수 있습니다"
// TODO : 제네릭
// * 제네릭을 사용하면 다양한 타입을 지원하는 함수를 작성할 수 있음
// * ts배열은 모든 타입의 객체를 가질 수 있지만, 제네릭 타입은 Array<Person> 처럼 배열에서 허용되는 특정 타입을 지정해야 함
let genericArr1; // 제네릭 Array<>키워드로 기호 안에 타입 파라미터를 지정하거나,
let genericArr2; // number[]처럼 배열 요소의 타입을 직접 지정할 수도 있음
// ? 배열 내 모든 요소가 같은 타입을 가지면 genericArr2처럼, 배열 내 요소가 서로 다른 타입을 저장한다면 genericArr1처럼
let genericArr3; // 이게 더 보기 좋음!
class Drink {
}
class Water extends Drink {
}
class Haribo {
}
const cart = []; // ? <Drink>파라미터가 추가된 제네릭 배열은 Drink또는 상응하는 타입의 인스턴스만 저장
cart[0] = new Drink();
cart[1] = new Water();
cart[2] = new Haribo();
cart[3] = { name: 'sprite' }; // 객체 리터럴도 가능
class Rectangle {
    // compareTo(value: any): number {
    compareTo(value) {
        // 사각형 비교 알고리즘
        return 1;
    }
} // 사각형 전용 넓이비교함수 Rectangle.compareTo
class Triangle {
    // compareTo(value: any): number {
    compareTo(value) {
        // 삼각형 알고리즘
        return 2;
    }
} // 삼각형 전용 넓이비교함수 Triangle.compareTo
class Programmer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    compareTo(value) {
        return this.salary - value.salary;
    }
}
const prog1 = new Programmer('John', 20000);
const prog2 = new Programmer('Alex', 30000);
prog1.compareTo(prog2) > 0
    ? console.log(`${prog1.name} is richer`)
    : prog1.compareTo(prog2) == 0
        ? console.log(`${prog1.name} and ${prog1.name} earn the same amounts`)
        : console.log(`${prog1.name} is poorer`);
// "John is poorer"
// TODO : 제네릭 함수 생성
// * 함수 파라미터 타입과 반환 값 타입에 동일한 문자 T를 사용하면 함수 호출 중 상세타입이 사용되어도 반환 값의 타입이 동일하도록 제한함
function printMe(content) {
    console.log(content);
    return content;
}
// ? 위 함수를 화살표함수로 사용한다면
const printMeArrow = (content) => {
    console.log(content);
    return content;
};
const genericF1 = printMe('Hello'); // "Hello" ... 문자열 파라미터로 printMe 호출
const genericF2 = printMeArrow('Hello'); // 화살표함수로 호출
const genericF3 = printMe('Hello'); // 명시적 타입 추가 가능하지만 필요는 없음
class Printer {
    constructor(name) {
        this.name = name;
    }
}
const genericF4 = printMe(new Printer('Joe')); // Printer {name: 'Joe'}
// TODO : 제네릭 타입을 사용한 클래스와 함수
class Pair {
    // key, value
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
} // 처음에는 K,V등 특정 문자로 제네릭 타입 파라미터를 사용하다가, Pair클래스를 선언하고 컴파일 하면 K와 V가 삭제되고 선언된 타입으로 대체됨
function comparePair(pair1, pair2) {
    return pair1.key === pair2.key && pair1.value === pair2.value;
}
let pair1 = new Pair(1, 'Apple');
let pair2 = new Pair(1, 'Orange');
// ? 상세 파라미터를 명시적으로 지정
console.log(comparePair(pair1, pair2)); // false
let pair3 = new Pair('first', 'apple');
let pair4 = new Pair('first', 'apple');
// ? 상세 파라미터 암시
console.log(comparePair(pair3, pair4)); // true
var UserRole;
(function (UserRole) {
    UserRole["Administrator"] = "admin";
    UserRole["Manager"] = "manager";
})(UserRole || (UserRole = {}));
function loadUser() {
    // 제네릭 함수 선언
    return JSON.parse('{ "name": "john", "role": "admin" }');
}
const user = loadUser(); // 제네릭 함수 호출 + 여기서 Manager타입 사용
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
const outerFunc = (someValue) => (multiplier) => someValue * multiplier;
const innerFunc = outerFunc(10);
let result = innerFunc(5);
console.log(result); // 50
// 파라미터가 없는 함수 호출
const noArgFunc = () => (c) => c + 5;
// 숫자 파라미터를 가진 함수 호출
const numArgFunc = (someValue) => (multiplier) => someValue * multiplier;
// 문자열 파라미터를 가진 함수 호출
const stringArgFunc = (someText) => (padding) => someText.length + padding;
// 컴파일 오류 ... numFunc는 다른 시그니처야함.
// const createSumString: numFunc<number> = () => (x: number) => 'Hello'; //error
