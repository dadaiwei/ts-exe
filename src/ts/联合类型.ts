// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;

function getLength (something: string | number): number {
  return something.toString().length;
}