// 元祖，数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
let dic: [string, number] = ['Tom', 25];
// 当添加越界的元素时，它的类型会被限制为元祖中每个类型的联合类型。
dic.push(123123);
console.log(dic);
