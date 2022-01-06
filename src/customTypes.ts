// TODO : Custom types

// TODO : Type
// * 새로운 타입을 선언하거나 타입 별칭을 사용해 이미 존재하는 타입에 다른 이름을 붙여 사용 할 수 있음
type price = number; // 타입 별칭
type vegan = boolean; // 타입 별칭
type Pizza = {
  name: string;
  veganFriendly: vegan;
  //price: price; // 이렇게 작성하게 되면 price가 빠지면 에러생김
  price?: price; // '?' -> 조건부 프로퍼티
};

let pineapplePizza: Pizza = {
  name: 'pineapplePizza',
  veganFriendly: true,
  price: 10000,
};

let bulgogiPizza: Pizza = {
  name: 'bulgogiPizza',
  veganFriendly: false,
  // price: 15000, // price에 '?'이 빠진 경우 가격이 빠지면 "Pizza 형식에서 필수입니다" 라는 에러 뱉어냄
};

// TODO : 클래스 내 커스텀 타입 사용하기
// * p1이 js로 컴파일 되면 Person1 클래스의 프로퍼티가 없음. Person1 생성잘르 선언하지 않았기 때문에 인스턴스를 만든 후에 프로퍼티를 초기화 했음.
// class Person1 {
//   firstName: string; // '...이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.'
//   lastName: string; // '...이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.'
// }
// const p1 = new Person1();
// p1.firstName = 'John';
// p1.lastName = 'Smith';

class Person2 {
  constructor(public firstName: string, public lastName: string) {}
}
const p2 = new Person2('John', 'Smith'); // 한줄로 가능 + 명시적 타입 표기 생략 가능

// TODO : 접근 제어자 - readonly, private, protected, public
// * readonly : 읽기만 가능하고 변경 불가능 (const와 비슷한데, const는 클래스 프로퍼티에 사용 불가)

// TODO : 인터페이스를 사용한 커스텀 타입
// * 객체 프로퍼티 또는 메서드 구현을 위해 사용되며, JS에서는 인터페이스 없음. -> 따라서 JS코드로 컴파일 되지 않음
// * TS에서는 인터페이스를 지원하는 interface와 implements 키워드가 있음
// * class로 선언한 커스텀타입은 마치 값처럼 여러번 사용 가능하고, 컴파일 된 js코드에도 해당 코드가 포함됨 -> 값을 나타낼 때 사용
// * interface, type은 런타임동안 객체가 인스턴스화 된다면 (=타입검사기로 안전하게 커스텀 타입을 선언하고자 한다면) 사용
interface Person {
  firstName: string;
  lastName: string;
}
function savePerson(person: Person): void {
  console.log('Saving ', person);
}

// const p: Person = {
const p = {
  // Person 타입이 정의되지 않아도 됨 -> 구조적 타입 시스템 때문
  // * 구조적 타입 시스템 ... 서로 다른 타입이여도 멤버가 서로 일치한다면 두 타입은 서로 호환될 수 있음
  firstName: 'John',
  lastName: 'Smith',
};
savePerson(p);

// TODO : 구조적 타입 시스템과 명목적 타입 시스템
// * TS의 경우 구조적 타입 시스템 ... 같은 구조를 가지고 있다면 (=같은 타입과 갯수의 프로퍼티를 가진다면) 클래스 인스턴스를 다른 클래스의 변수에 할당할 수 있음
class Pers {
  name: String;
  // age: Number;
}
class Custo {
  name: String;
  age: Number;
}
const cust1: Pers = new Custo();
// const cust2: Custo = new Pers(); // ERR! 타입 일치하지 않음 .. Pers에서는 age 프로퍼티가 없어서 Pers객체 내 age 프로퍼티의 메모리를 할당할 수 없기 때문

// TODO : 커스텀 타입의 유니온
// * 식별 가능한 유니온 = 공통의 식별자를 가진 멤버로 이루어진 타입
interface CustomRectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface CustomCircle {
  kind: 'circle';
  radius: number;
}

type Shape = CustomRectangle | CustomCircle; // 공통의 식별자 kind를 가지고 있음

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'rectangle':
      return shape.height * shape.width;
    case 'circle':
      return Math.PI * shape.radius ** 2;
  }
}

const myRectangle: CustomRectangle = {
  kind: 'rectangle',
  width: 10,
  height: 20,
};
console.log(`Rectangle's area is ${area(myRectangle)}`);

const myCircle: CustomCircle = { kind: 'circle', radius: 10 };
console.log(`Circle's area is ${area(myCircle)}`);
