// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray<T> (length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']
createArray<number>(3, 1); // [1, 1, 1]

// 多个类型泛型
function swap<T, U> (tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]

// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise> (arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型接口
interface CreateArrayFunc {
  <T> (length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc;
createArray1 = function <T> (length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
createArray1(3, 'x'); // ['x', 'x', 'x']




export default createArray;