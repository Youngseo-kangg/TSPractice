// TODO : 클래스
// * 클래스 관련 참고
// 객체 지향 언어는 멤버 변수로 클래스를 선언할 수 있습니다. (-> customTypes.ts에서 구조적 타입 시스템 예시 참고)
// js에서 클래스 내 생성자(constructor)를 선언할 수 있고, 이 선언자는 인스턴스 생성 중 한번만 호출됨
// 컴파일 타겟이 ES5 : ts컴파일러가 js 생성자 함수로 변환
// 컴파일 타겟이 ES6 : ts컴파일러가 자바스크립트 클래스로 컴파일
// 클래스 생성자의 파라미터를 readonly, public, protected, private 키워드로 정의하면 ts는 각 파라미터에 대한 클래스 프로퍼티를 만듬

// * 클래스 상속 + public, private, protected 접근 제어자
// 아래에서 Human은 슈퍼(부모)클래스, Employee는 서브(자식)클래스
class Human {
  public firstName = ''; // 클래스 내, 외부로부터의 접근 가능
  public lastName = '';
  private age = 0; // 해당 클래스(=Human) 내부에서만 사용 가능
  protected sayHello(): string {
    return `my name is ${this.firstName} ${this.lastName}`;
  } // 해당 클래스나 서브클래스 내부에서만 사용 가능, 클래스 인스턴스에서는 불가
}

class Employee extends Human {
  department = '';
  reviewPerformance(): void {
    this.sayHello();
  }
}

const empl = new Employee();
// 앞에 접근 제어자가 없는 경우 (=all public)
// empl. // 프로퍼티로 age,department,firstName,lastName, sayHello 확인 가능
// empl.sayHello(); // 'sayHello' 프로퍼티는 보호되어 'Person'클래스와 서브 클래스에서만 접근 가능합니다.//

// * 생성자를 가진 클래스
class HumanWithConstrutor1 {
  // 프로퍼티를 명시적으로 자세히 선언
  public firstName = '';
  public lastName = '';
  private age = 0;
  // 여기서의 생성자는 파라미터의 값을 각 프로퍼티에 할당하는 일 수행
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class HumanWithConstrutor2 {
  // 생성자 파라미터와 접근제어자를 사용해 tsc가 생성자의 파라미터와 이름이 동일한 클래스 프로퍼티를 만들도록 지시함
  // tsc는 생성자에게 제공된 값을 클래스 프로퍼티에 할당하기 위해 js코드를 자동 생성하게 됨.
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
}
const human2 = new HumanWithConstrutor2('John', 'Smith', 29);
// console.log(`${human2.age}`) // age 프로퍼티는 private이며 HumanWithConstructor 클래스 내에서만 접근할 수 있습니다.
// '정답은 없습니다' ... 단순 프로퍼티 초기화의 경우 암시적 선언을 사용함

// * 고정 변수와 싱글톤
// 클래스의 인스턴스가 일부 프로퍼티를 공유해야 하는 경우 정적 프로퍼티로 선언함 = static!
class Gangsta {
  static totalBullets = 100; // Gangsta클래스를 통해 만들어진 인스턴스는 정적프로퍼티를 공유하게 됨.
  shoot() {
    Gangsta.totalBullets--;
    // this.totalBullets (X) ... 인스턴스 변수가 아니고 클래스의 정적 프로퍼티라서
    console.log(`Bullets left : ${Gangsta.totalBullets}`);
  }
}

class SuperGangsta extends Gangsta {
  shootMany() {
    SuperGangsta.totalBullets--;
    SuperGangsta.totalBullets--;
    console.log(`[SG] Bullets left: ${SuperGangsta.totalBullets}`);
  }
}

const g1 = new Gangsta();
const g2 = new Gangsta();
const sg = new SuperGangsta();

g1.shoot(); // Bullets left : 99
g2.shoot(); // Bullets left : 98
sg.shootMany(); // Bullets left : 96 -> Gangsta를 복사해 그대로 가져오기 때문에 82번줄 가져와서 -2
sg.shoot(); // Bullets left : 97 -> Gangsta를 복사해 그대로 가져오기 때문에 82번줄 가져와서 -1
sg.shootMany(); // Bullets left: 94 -> 83번줄에서 계산했던 값을 가져와 -2
sg.shoot(); // Bullets left : 96 -> 84번줄에서 계산한 값을 가져와서 -1
