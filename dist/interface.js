"use strict";
// TODO : 인터페이스
// * 인터페이스 관련 참고
// 생성자를 포함시킨 커스텀타입이 필요하다면 일반 클래스를, 그렇지 않다면 인터페이스 사용
class Car {
    // 빈 상태로만 두면 'Car 클래스가 MotorVehicle 인터페이스를 잘못 구현합니다... 속성이 없습니다'라는 에러를 뱉음
    // ? 인터페이스로 클래스를 선언할 때, 인터페이스 내 각 메서드를 구현해야함.
    // ? Car 클래스가 MotorVehicle인터페이스에 선언된 API를 반드시 구현할 것임을 약속한 것과 같음
    startEngine() {
        return true;
    }
    stopEngine() {
        return true;
    }
    brake() {
        return true;
    }
    accelerate(speed) {
        console.log(`Driving faster`);
    }
    honk(howLong) {
        console.log(`Beep beep yeah!`);
    }
    playingMusic(songTitle) {
        console.log(`playing ${songTitle}`);
    }
}
const car1 = new Car(); // Car 클래스를 초기화 함
const car2 = new Car(); // car 타입을 명시적으로 선언할 수도 있음
// ? Car에서 구현된 6개의 메서드 사용 가능
const car3 = new Car(); // Car 클래스는 커스텀 타입을 구하기 때문에 MotorVehicle 타입 선언도 가능함
// ? MotorVehicle에서 선언된 메서드 5개만 사용 가능
car1.startEngine(); // Car API를 사용해 엔진 실행
// ? 아래의 경우 Flyable2가 MotorVehicle로 확장하고 있기 때문에 MotorVehicle, Flyable2, Swimmable을 합친 총 7개의 메서드 구현이 필요함
class SecretServiceCar {
    startEngine() {
        return true;
    }
    stopEngine() {
        return true;
    }
    brake() {
        return true;
    }
    accelerate(speed) {
        console.log(`Driving faster`);
    }
    honk(howLong) {
        console.log(`Beep beep yeah!`);
    }
    fly(howHigh) {
        console.log(`flying ${howHigh} feet high`);
    }
    land() {
        console.log(`Landing, Fasten your belts`);
    }
    swim(howFar) {
        console.log(`Swimming ${howFar} feet`);
    }
}
