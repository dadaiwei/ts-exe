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
