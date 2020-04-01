// 类声明属性和方法
export class AnimalClass {
  constructor(name: string) { // 构造函数
    (this as any).name = name;
  }
  static isAnimal (a: any): boolean { // 静态方法
    return a instanceof AnimalClass;
  }
  sayHi () { // 方法
    return `My name is ${(this as any).name}`;
  }
}

let a: AnimalClass = new AnimalClass('hello animal');
console.log(AnimalClass.isAnimal(a));
console.log(a.sayHi());
console.log('\n');

// 继承
export class CatClass extends AnimalClass {
  constructor(props: any) {
    super(props); // 调用父类的constructor(name);
    console.log((this as any).name);
  }
  sayHi () {
    return 'Meow,' + super.sayHi(); // 调用父类的sayHi()
  }
}
let c: CatClass = new CatClass('Tom Cat');
console.log(c.sayHi());
console.log('\n');


// ES7中类的用法
// typeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问，也不能在子类中访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
class NewAnimal {
  public name = 'New Animal'; // 公有属性
  private readonly age = 20; // 私有属性，只能在类内部访问，且是只读属性
  protected height = 120; // 保护属性
  static num = 12;
  constructor(height?: any) {
    this.height = height;
  }
}
const newAnimalExp = new NewAnimal();
console.log(newAnimalExp.name);
console.log(NewAnimal.num);
console.log('\n');

class NewCat extends NewAnimal {
  constructor(height: number) {
    super(height);
  }
}
const newCatExp: NewCat = new NewCat(130);
console.log(newCatExp);
console.log('\n');


// 抽象类，用于定义类和其中的抽象方法
abstract class AbstractAnimal { // 抽象类
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi (): void; // 抽象方法
}

class CatClassExp extends AbstractAnimal {
  public sayHi () {
    console.log(`Meow, My name is ${this.name}`);
  }
}

const newCatExp1: CatClassExp = new CatClassExp('Hello, This is abstract class.');
newCatExp1.sayHi();
console.log('\n');

// 类与接口
// 实现（implements）是面向对象中的一个重要概念。
// 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
// 这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。
// 这个特性大大提高了面向对象的灵活性。
interface Alarm {
  alert (): void;
}

// 接口与接口之间可以是继承关系
interface Light extends Alarm {
  lightOn (): void;
  lightOff (): void;
}

// 接口可以继承类
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);

class Door { }

class SecurityDoor extends Door implements Alarm {
  alert () {
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm, Light {
  alert () {
    console.log('Car alert');
  }
  lightOn () {
    console.log('Car light on');
  }
  lightOff () {
    console.log('Car light off');
  }
}

const securityDoorExp = new SecurityDoor();
securityDoorExp.alert();
const carExp = new Car();
carExp.alert();
carExp.lightOn();
console.log('\n');