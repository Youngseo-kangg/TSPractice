// TODO : Types

// * string, boolean, number, ...
// * Symbol: ES6에 추된 변경 불가능한 원시 타입으로 객체 프로퍼티를 만들 수 있음
// new 키워드는 생략됨
const sym1 = Symbol('orderId');
const myOrder = {
  ord: 'abc',
};
console.log(myOrder['ord']);

// * null, undefined : 명시적으로 작성해주면 코드 가독성 향상됨

// * any : string, number, boolean, 커스텀 타입 값 할당 가능
// 남용하면 타입 체크의 장점을 잃고 가독성도 떨어짐

// * never : 절대 반환하지 않는 함수 (= 절대로 실행이 종료되지 않는 함수, 오류를 발생시키기 위한 함수 등)
// 화살표함수, 함수표현식은 never타입을 반환한다고 유추함, 실행 조차 완료하지 않음

// * void : 값을 반환하지 않는 함수를 선언하는데 사용 (return할 값이 없고 console.log정도만 사용하는 경우)
// never와 다르게 실행을 완료하지만 값을 반환하지 않음

// TODO : 타입 유추
const alphabet = 'abc'; // age에 25라는 값을 선언 + 초기화까지
// const alphabet:string = 'abc' // 이미 number로 유추 완료한 상태라 명시적으로 추가 필요 없음

// TODO : 타입 확장
// * 초기값 없이 변수를 선언하면 tsc는 any타입으로 유추
let productId1; // 선언만 완료했기 때문에 any타입으로 유추
productId1 = null; // any값에 null 할당
productId1 = undefined; // any값에 undefined 할당

// TODO : 타입 축소
// * 조건문을 적용해 변수 타입을 세분화 하는 것
// * instanceOf : 런타임동안 실제 객체 타입 확인, 사용자가 만든 커스텀 타입에 사용 ... typeOf sign === "Person"처럼
// * typeOf: 타입스크립트 내장 타입에 사용 ... typeOf sign === "string"처럼

// * '--strictNullCheck'값을 config에 설정해주면 타입이 정해진 변수에 null이 입력되는 것을 막아줌!
// let productId2 = 1;
// productId2 = null; // 'null' 형식은 'number'형식에 할당할 수 없습니다.

// TODO : 함수 본문 내 타입 선언 + 유니온 타입
// * 함수 표현식과 함수는 파라미터 타입과 반환값을 명시적으로 선언해야함.
// * 유니온은 OR연산자처럼 변수에 지정할 수 있는 타입이 여러 개일 경우 사용함
function calcTax(
  state: string,
  income: number,
  dependents: number
): number | undefined {
  if (state === 'NY') {
    return income * 0.06 - dependents * 500;
  } else if (state === 'NJ') {
    return income * 0.05 - dependents * 300;
  }
  // NY, NJ 이외의 경우에는 undefined를 리턴하게 됨
}
console.log('calcTax("NJ", 50000, 2): ', calcTax('NJ', 50000, 2));
// console.log('calcTax("NJ", 50000, 2): ', calcTax('NJ', 50000, "two")); // 'string'형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
