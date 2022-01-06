"use strict";
// TODO : Custom types
let pineapplePizza = {
    name: 'pineapplePizza',
    veganFriendly: true,
    price: 10000,
};
let bulgogiPizza = {
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
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const p2 = new Person2('John', 'Smith'); // 한줄로 가능 + 명시적 타입 표기 생략 가능
function savePerson(person) {
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
}
class Custo {
}
const cust1 = new Custo();
function area(shape) {
    switch (shape.kind) {
        case 'rectangle':
            return shape.height * shape.width;
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
    }
}
const myRectangle = {
    kind: 'rectangle',
    width: 10,
    height: 20,
};
console.log(`Rectangle's area is ${area(myRectangle)}`);
const myCircle = { kind: 'circle', radius: 10 };
console.log(`Circle's area is ${area(myCircle)}`);
