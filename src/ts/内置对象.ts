// 内置对象，内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。
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