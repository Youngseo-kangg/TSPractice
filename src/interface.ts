// TODO : 인터페이스
// * 인터페이스 관련 참고
// 생성자를 포함시킨 커스텀타입이 필요하다면 일반 클래스를, 그렇지 않다면 인터페이스 사용

// * 인터페이스 강제
interface MotorVehicle {
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number): any;
  honk(howLong: number): void;
  // 클래스에 사용될 메서드 시그니처 선언 ... 인터페이스 내 메서드 구현은 없음
  // 5개의 메서드 구현
}
class Car implements MotorVehicle {
  // 빈 상태로만 두면 'Car 클래스가 MotorVehicle 인터페이스를 잘못 구현합니다... 속성이 없습니다'라는 에러를 뱉음
  // ? 인터페이스로 클래스를 선언할 때, 인터페이스 내 각 메서드를 구현해야함.
  // ? Car 클래스가 MotorVehicle인터페이스에 선언된 API를 반드시 구현할 것임을 약속한 것과 같음
  startEngine(): boolean {
    return true;
  }
  stopEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number) {
    console.log(`Driving faster`);
  }
  honk(howLong: number): void {
    console.log(`Beep beep yeah!`);
  }
  playingMusic(songTitle: string): void {
    console.log(`playing ${songTitle}`);
  }
  // 6개의 메서드 구현
  // 인터페이스 내 메서드 구현
}
const car1 = new Car(); // Car 클래스를 초기화 함
const car2: Car = new Car(); // car 타입을 명시적으로 선언할 수도 있음
// ? Car에서 구현된 6개의 메서드 사용 가능
const car3: MotorVehicle = new Car(); // Car 클래스는 커스텀 타입을 구하기 때문에 MotorVehicle 타입 선언도 가능함
// ? MotorVehicle에서 선언된 메서드 5개만 사용 가능
car1.startEngine(); // Car API를 사용해 엔진 실행

interface Flyable1 {
  fly(howHigh: number): void;
  land(): any;
}
interface Swimmable {
  swim(howFar: number): void;
}

// * 아래의 경우는 세가지 인터페이스 내 모든 메서드를 구현해야 함
// ?클래스 JamesBondCar 전체에게 다 적용시키는것 보다는 선택적으로 적용시킬 수 있음
// class JamesBondCar extends MotorVehicle, Flyable, Swimmable {
// 메서드 구현
// }

// * 아래의 경우에서 모든 메서드를 클래스 내부에서 구현하게 되면, 자동차 + 수영가능 + 비행 가능한 객체가 되고, 일반 Car 클래스는 MotorVehicle 인터페이스에 정의된 기능만을 갖게 됨.
// class WeasleyCar extends MotorVehicle implements Flyable, Swimmable{
//     // 메서드 구현
// }

// * 인터페이스 확대
// 특수임무차의 경우 MotorVehicle, Flyable, Swimmable 인터페이스 내 메서드를 모두 구현해야 함
// class SecretServiceCar implements MotorVehicle, Flyable1, Swimmable {
//     // 세가지 인터페이스 내 모든 메서드 구현
// }
// 비행 가능한 객체 역시 자동차이기 때문에 아래처럼 선언할 수 있음.
interface Flyable2 extends MotorVehicle {
  // ? 다른 인터페이스 확장 가능
  fly(howHigh: number): void;
  land(): any;
}
// ? 아래의 경우 Flyable2가 MotorVehicle로 확장하고 있기 때문에 MotorVehicle, Flyable2, Swimmable을 합친 총 7개의 메서드 구현이 필요함
class SecretServiceCar implements Flyable2, Swimmable {
  startEngine(): boolean {
    return true;
  }
  stopEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number) {
    console.log(`Driving faster`);
  }
  honk(howLong: number): void {
    console.log(`Beep beep yeah!`);
  }
  fly(howHigh: number) {
    console.log(`flying ${howHigh} feet high`);
  }
  land() {
    console.log(`Landing, Fasten your belts`);
  }
  swim(howFar: number): void {
    console.log(`Swimming ${howFar} feet`);
  }
}

// * 참고) Implements와 extends의 차이?
// ? extends는 상속의 한 형태로, 부모에서 선언된 메소드 혹은 변수를 자식은 모두 그대로 상속 받아 사용 가능
// ? -> 다중 상속을 지원하지 않음
// ? Implements는 부모의 메소드나 변수를 그대로 갖다 쓰는 것이 아니고, 반드시 오버라이드 해서 사용해야 함.
// ? -> 해당 인터페이스에 있는 프로퍼티 및 메소드를 전부 가지고 있거나 구현해야 하고, 다중상속도 지원함

// TODO : 인터페이스 프로그래밍
class IntfProduct {
  id: number;
  description: string;
} // 클래스를 통한 커스텀 클래스 선언

class IntfProductService {
  getProducts1(): IntfProduct[] {
    return [];
  }
  getProductById1(id: number): IntfProduct {
    return { id: 123, description: 'Good Product' };
  }
}

class MockIntfProductService implements IntfProductService {
  // ? 만약 거꾸로 IntfProductService가 MockIntfProductService 클래스의 동일한 두 메서드를 선언한다면 오류가 발생할 수 있음
  getProducts1(): IntfProduct[] {
    return [];
  }
  getProductById1(id: number): IntfProduct {
    return { id: 456, description: 'Not a real Product' };
  }
} // 가장 좋은 방법은 처음부터 인터페이스에 집중해 코드를 작성하는것

const interfaceProductService = new IntfProductService();
const interfaceProducts = interfaceProductService.getProducts1();

interface IProduct {
  id: number;
  description: string;
} // 인터페이스를 통한 커스텀 타입 선언

interface IProductService {
  getProducts(): IProduct[];
  getProductById(): IProduct;
} // API를 인터페이스로 선언

// class IntProductService implements IProductService {
//   // ? 만약 거꾸로 IntfProductService가 MockIntfProductService 클래스의 동일한 두 메서드를 선언한다면 오류가 발생할 수 있음
//   getProducts(): IProduct[] {
//     return [];
//   }
//   getProductById(id: number): IProduct {
//     return { id: 0, description: 'Not a real Product' };
//   } // 왜인지는 모르겠으나 이부분에서 오류남... 뭐지ㅠㅜㅠㅜ
// }
