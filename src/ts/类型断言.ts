// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 类型断言，并不会改变数据类型
// 将一个联合类型断言为其中一个类型
interface Animal {
  name: string;
}
interface Cat extends Animal {
  run (): void;
}
interface Fish extends Animal {
  swim (): void;
}
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