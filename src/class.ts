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
// empl.sayHello(); // 'sayHello' 프로퍼티는 보호되어 'Person'클래스와 서브 클래스에서만 접근 가능합니다.

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

// TODO : 고정 변수
// * 클래스의 인스턴스가 일부 프로퍼티를 공유해야 하는 경우 정적 프로퍼티로 선언함 = static!
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

// * static인 클래스 멤버는 서브 클래스에 공유가 되지 않음 -> 아래 예시에서 서로 다른 값을 가져와서 쓰는것 마냥 씀
sg.shootMany(); // Bullets left : 96 -> Gangsta를 복사해 그대로 가져오기 때문에 82번줄 가져와서 -2
sg.shoot(); // Bullets left : 97 -> Gangsta를 복사해 그대로 가져오기 때문에 82번줄 가져와서 -1
sg.shootMany(); // Bullets left: 94 -> 83번줄에서 계산했던 값을 가져와 -2
sg.shoot(); // Bullets left : 96 -> 84번줄에서 계산한 값을 가져와서 -1

// TODO : 싱글톤
// * 싱글톤 : 단 하나의 인스턴스를 생성하는 디자인 패턴
// * 프로그램 전반에서 사용하는 인스턴스를 하나만 구현하고, 생성된 인스턴스 객체는 어디에서든지 참조 가능
// * new 키워드로 원하는 만큼 인스턴스를 생성하니, new 키워드의 사용을 막아야 함
// -> new 키워드로 private인 클래스 생성자의 새로운 인스턴스를 만들면 오류 발생
// * static 키워드로 클래스 메서드를 정적 메서드로 마들면 특정 인스턴스가 아닌 클래스에만 속하도록 만들 수 있음

class AppState {
  counter = 0; // 앱 상태
  private static instanceRef: AppState; // AppState의 단일 인스턴스에 대한 참조 저장
  private constructor() {} // private 생성자는 AppState와 함께 새 연산자 사용 불가
  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState(); // AppState객체가 존재하지 않으면 인스턴스화
    }
    return AppState.instanceRef;
  }
}

// const appState = new AppState(); // 'AppState'클래스의 생성자는 private이며 클래스 선언 내에서만 엑세스 할 수 있습니다'

// getInstance()메서드로 AppState 클래스의 생성자를 사용할 수 있음
const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter); // 4
console.log(appState2.counter); // 4

// TODO : super 메서드와 super 키워드
class SuperPerson {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
  // 부모의 sellStock 메서드
  sellStock(symbol: string, numberOfShares: number) {
    console.log(`Selling ${numberOfShares} of ${symbol}`);
  }
}

class Employer extends SuperPerson {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public department: string
  ) {
    // Employer의 생성자는 4개의 파라미터를 가지는데, 온전히 employer에서만 쓰이는건 department뿐이고 나머지 3개는 Person 객체를 구성하기 위한것으로 super()메서드를 호출해 Person에 전달함
    super(firstName, lastName, age);
  }
  // 자식의 sellStock 메서드
  sellStock(symbol: string, shares: number) {
    super.sellStock(symbol, shares); // 부모에서 sellStock()호출
    this.reportToCompliance(symbol, shares);
  }

  private reportToCompliance(symbol: string, shares: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`
    );
  }
}

const emplr = new Employer('Joe', 'Smith', 29, 'Accounting');
emplr.sellStock('IBM', 100);
// Selling 100 of IBM -> Smith from Accounting sold 100 shares of IBM

// TODO : 추상 클래스
// * 객체로 만들 수 없는 추상적인 개념, 일종의 설계도
// * abstract 키워드로 선언 ... 프로퍼티와 메서드도 abstract 선언 가능
// * 추상 클래스로부터 객체를 생성하기 때문에 인스턴스화 될 수 없음
// * 추상 클래스가 필요한 이유? ... 구체적이지 않는 메서드를 서브 클래스에 위임해 하위에서 더 자세히 구현할 수 있기 때문

abstract class AbstractPerson {
  constructor(public name: string) {}
  changeAddress(newAddress: string) {
    console.log(`Changing address to ${newAddress}`);
  }
  giveDayOff() {
    console.log(`Giving a day off to ${this.name}`);
  }
  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent);
    // * 추상 메서드를 호출하는 명령문 작성 가능
    // 추상 클래스는 인스턴스화 할 수 없으므로 추상멤버(=구현되지 않은 메서드)는 절대로 호출 안됨
  }
  abstract increasePay(percent: number): void; // 추상메서드
}

class AbstractEmployee extends AbstractPerson {
  increasePay(percent: number): void {
    console.log(`increasing the salary of ${this.name} by ${percent}%`);
  }
}

class AbstractContractor extends AbstractPerson {
  increasePay(percent: number): void {
    console.log(`increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}

// class AbstractTest extends AbstractPerson{} // 이렇게 increasePay에 대해 작성하지 않으면 "비추상클래스 AbstractTest는 'AbstractPerson'클래스에서 상속된 추상 멤버 'increasePay'를 구현하지 않습니다" 라는 에러를 보임

const abstractWorkers: AbstractPerson[] = []; // "배열 workers는 AbstractPerson타입의 배열로 자식 객체의 인스턴스를 저장합니다."
abstractWorkers[0] = new AbstractEmployee('John');
abstractWorkers[1] = new AbstractContractor('Mary');

abstractWorkers.forEach((worker) => worker.promote(5)); // 각 객체마다 promote메서드 호출

// TODO : 메서드 오버로딩
// * 파라미터의 유형과 갯수가 다르지만 이름이 같은 메서드를 여러개 가질 수 있게 만드는 것
// 원래 타입 언어에서는 타입이 없는 파라미터를 가진 클래스 메서드 호출 불가
// 하지만 js를 위한 syntactic sugar로서 함수 내 파라미터 개수를 처음 선언보다 더 많이, 혹은 더 적게 만들 수 있음

class ProductService1 {
  // getProducts() {
  //   // 파라미터 없음
  //   console.log(`getting all products`);
  // } // TS에서는 오류가 나지만 js에서는 아래 getProducts로 변환되어 컴파일 돼 에러 없음
  getProducts(id: number) {
    // 파라미터 있음
    console.log(`getting the product info for ${id}`);
  }
}
const prodService = new ProductService1();
// id 파라미터가 필요한 getProducts()가 실행됨
prodService.getProducts(123); // getting the product info for 123
// prodService.getProducts(); // getting the product info for undefined

class ProductService2 {
  // getProducts(); // 반환 주석이 없어 오류남
  // getProducts(id: number); // 반환 주석이 없어 오류남
  getProducts(id?: number) {
    // 물음표가 없으면 '오버로드 시그니처가 함수 구현과 호환되지 않습니다' 라는 오류 표시하게 됨
    if (typeof id === 'number') {
      console.log(`Getting the product info for ${id}`);
    } else {
      console.log(`Getting all products`);
    }
  }
}
const prodService2 = new ProductService2();
prodService2.getProducts(123);
prodService2.getProducts();

interface Product {
  id: number;
  description: string;
}

class ProductService3 {
  getProducts(description: string): Product[]; // 오버로딩 메서드 선언
  getProducts(id: number): Product; // 오버로딩 메서드 선언
  // 메소드 구현
  getProducts(product: number | string): Product[] | Product {
    if (typeof product === 'number') {
      // 파라미터 id로 메서드 호출 되었나 확인
      console.log(`Getting the product info for id ${product}`);
      return { id: product, description: 'great product' };
    } else if (typeof product === 'string') {
      // 파라미터 description으로 호출 되었나 확인
      console.log(`Getting product with description ${product}`);
      return [
        { id: 123, description: 'blue jeans' },
        { id: 789, description: 'blue jeans' },
      ];
    } else {
      return {
        id: -1,
        description: `Error: getProducts() accept only number or string as args`,
      };
    }
  }
}

const prodService3 = new ProductService3();
console.log(prodService3.getProducts(123));
console.log(prodService3.getProducts('blue jeans'));

// * 파라미터 타입과 함수 반환값에 유니온을 사용해 메서드를 구현할 수 있는데 굳이 오버로딩을?
// * -> tsc가 올바른 방법으로 메서드를 호출 할 수 있게 해주고, 어떤 파라미터 타입이 어떤 타입의 값을 반환하는지 이해하기 쉽게 보여줌

// TODO : 메서드 오버로딩 생성자
class ProductService4 {
  constructor(); // 생성자 선언 내 파라미터 x (생성자 선언)
  // constructor(id: string); // 생성자 선언 내 한개의 파라미터 만듬 (생성자 선언)
  constructor(id: number, description: string); // 생성자 내 2개의 파라미터 (생성자 선언)
  constructor(id?: number, description?: string) {
    // 모든 가능한 파라미터를 다루는 생성자 구현
  }
}

// * ts에서 오버로딩 메서드나 생성자를 사용할 때 주의가 필요함
// 오버로딩을 사용하면 여러 방법으로 메서드 호출이 가능하지만 로직을 읽고 판단하는게 힘들어 질 수 있어 사용 절제하는 것이 일반적임.