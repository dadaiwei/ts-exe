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
export interface SearchFunc {
  (source: string, subString: string): boolean;
}

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