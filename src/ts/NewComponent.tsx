/* eslint-disable */
import React from 'react';
import { Person, NumberArray, SearchFunc, Animal, Cat, Fish } from './接口';
import './类';
import './泛型';

function NewComponent () {
  let isDone: boolean = false; // boolean类型
  let num: number = 1; // number类型
  let myName: string = 'Tom'; // string类型
  let unusable: void = undefined; // 空值
  let u: undefined = undefined; // undefined类型
  let n: null = null; // null类型
  let newNum: string | number | boolean = true; // 联合类型，可为多种类型中的一种


  // 对象的类型通过接口定义
  const person: Person = { // 接口定义对象类型
    name: 'Tome',
    age: 20,
    height: 180,
    num: 123,
    sayName (name) {
      console.log(name);
    }
  };
  person.sayName(person.name);
  console.log('\n');


  // 数组类型定义
  let fibonacci: number[] = [1, 1, 2, 3, 5]; // 数组类型，[类型 + 方括号]表示数组
  let arr: Array<number> = [1, 2, 3, 4, 5]; // 数组泛型，使用Array<elemType>表示数组
  let arr1: NumberArray = [1, 2, 3, 4, 5]; // 用接口表示数组
  let arr2: any[] = [1, '1', false, undefined, 123]; // 任意类型数组
  function handleArgs (): number {
    // 类数组
    let args: {
      [index: number]: number;
      length: number;
      callee: Function;
    } = arguments;
    let num: number = args.length;
    return num;
  }

  // 函数声明
  // 函数参数类型，void表示没有返回任何值
  function consoleLogName (name: string): void {
    console.log(`My name is ${name}`);
  }
  // 函数参数类型及返回值类型
  function getLength (something: string | number): string {
    return something.toString();
  }
  // 函数声明
  function sum (x: number, y: number): number {
    return x + y;
  }
  // 函数表达式
  let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
  };
  // 使用接口定义函数的形状
  let mySearch: SearchFunc = function (source: string, subString: string) {
    return source.search(subString) !== -1;
  };
  // 可选参数，可选参数必须在必需参数后面，可选参数后面不允许出现可选参数了
  function buildName (firstName: string, lastName?: string): string {
    if (lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return firstName;
    }
  }
  // 参数默认值
  function buildName1 (name: string = 'welcome'): string {
    return name;
  }
  // 剩余参数
  function push (array: any[], ...items: any[]) {
    items.forEach(function (item: any) {
      array.push(item);
    });
  }
  // 函数重载
  function reverse (x: number): number;
  function reverse (x: string): string;
  function reverse (x: number | string): number | string | undefined {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }

  // 函数调用
  consoleLogName(myName);
  const length: string = getLength(myName);
  const numSum: number = sum(100, 200);
  const numSum1: number = mySum(200, 300);
  const searchResult: boolean = mySearch('Hello World.', 'Hello');
  const nameResult1: string = buildName('hello');
  const nameResult2: string = buildName('hello', 'world');
  const nameResult3: string = buildName1('123');
  const arr3: any[] = [1, 2, 3];
  push(arr3, ['4', '5', '6']);
  const numReverse: number = reverse(123456789);
  const strReverse: string = reverse('Hello World, Welcome');
  console.log('\n');


  // 类型断言，并不会改变数据类型
  // 将一个联合类型断言为其中一个类型
  function isFish (animal: Cat | Fish): boolean {
    if (typeof (animal as Fish).swim === 'function') {
      return true;
    }
    return false;
  }
  // 将一个父类断言为更加具体的子类
  class ApiError extends Error {
    code: number = 0;
  }
  class HttpError extends Error {
    statusCode: number = 200;
  }
  function isApiError (error: ApiError | HttpError): boolean {
    if (typeof (error as ApiError).code === 'number') {
      return true;
    }
    return false;
  }
  // 将任何一个类型断言为any
  (window as any).foo = 1;
  // 类型断言的限制，要使得A能够被断言为B，只需要A兼容B或B兼容A即可
  function testAnimal (animal: Animal) {
    return (animal as Cat);
  }
  // 双重断言
  function testCat (cat: Cat) {
    return (cat as any as Fish);
  }
  const tomCat: Cat = {
    name: 'tom',
    run () { console.log('run'); }
  };
  console.log(isFish(tomCat));
  console.log(isApiError(new ApiError()));
  console.log(tomCat);
  console.log(testAnimal(tomCat));
  console.log(testCat(tomCat));
  console.log('\n');


  // 内置对象
  // ECMAScript 的内置对象
  let b: Boolean = new Boolean(1);
  let e: Error = new Error('Error occured');
  let d: Date = new Date();
  let r: RegExp = /[a-z]/;
  // DOM和BOM的内置对象
  let body: HTMLElement = document.body;
  let allDiv: NodeList = document.querySelectorAll('div');
  document.addEventListener('click', function (e: MouseEvent) {
    console.log(e.target);
  });
  console.log(body);
  console.log(allDiv);
  console.log('\n');


  // 类型别名，类型别名用来给一个类型起个新名字。
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;
  function getName (n: NameOrResolver): Name {
    if (typeof n === 'string') {
      return n;
    } else {
      return n();
    }
  }
  console.log(getName('类型别名'));
  console.log('\n');


  // 字符串字面量类型，字符串字面量类型用来约束取值只能是某几个字符串中的一个。
  type EventNames = 'click' | 'scroll' | 'mousemove';


  // 元祖，数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
  let dic: [string, number] = ['Tom', 25];
  // 当添加越界的元素时，它的类型会被限制为元祖中每个类型的联合类型。
  dic.push(123123);
  console.log(dic);
  console.log('\n');


  // 枚举，用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
  enum Days { Sun, Mon = 100, Tue, Wed, Thu, Fri, Sat };
  console.log(Days['Sun'] === 0);
  console.log(Days['Mon']);
  // 常数项和计算所得项，计算所得项必须必须位于最后一项
  enum Color { Red, Green, Blue = "blue".length };
  console.log('\n');


  return < div >
    {num} < br /> {isDone} < br /> {myName} < br /> {unusable} {u}{n}<br />{newNum} <br />{length} <br />{handleArgs()} <br />;
  {person.name} ：{person.age} <br />{fibonacci} <br />{arr} <br />{arr1} <br />{arr2} <br />{numSum} <br />{numSum1} <br />;
  {searchResult} <br />{nameResult1} <br /> {nameResult2} <br />{nameResult3} <br />{arr3} <br />{numReverse} <br /> {strReverse}
    <br />
  </div >;
}

export default NewComponent;