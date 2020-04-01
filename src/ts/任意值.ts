
// 任意值（Any）用来表示允许赋值为任意类型。
let newCom: any = 'seven';
newCom = 7;

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;