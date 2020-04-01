// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
declare const jQuery: (selector: string) => any;

// 函数类型声明
declare function jQuery (selector: string): any;

// 声明一个类
declare class Animal {
  name: string;
  constructor(name: string);
  sayHi (): string;
}

// 声明枚举
export declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

// 声明namespace
declare namespace jQuery {
  function ajax (url: string, settings?: any): void;
  const version: number;
  namespace fn {
    function extend (object: any): void;
  }
}

declare global {
  interface String {
    prepanedHello (): string;
  }
}

// 外部枚举
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

export default function foo (): string;