// 使用接口来定义对象类型
export interface Person {
  readonly name: string; // 只读属性
  age: number | string; // 可选类型
  height?: number; // 可选属性
  [propName: string]: any; // 任意属性，值为任意类型
  sayName (name: any): any;
}

// 使用接口定义数组类型
export interface NumberArray {
  [index: number]: number;
}

// 使用接口定义函数的形状
export interface SearchFunc {
  (source: string, subString: string): boolean;
}


export interface Animal {
  name: string;
}
export interface Cat extends Animal {
  run (): void;
}
export interface Fish extends Animal {
  swim (): void;
}