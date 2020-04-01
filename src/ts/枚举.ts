// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum Days { Sun, Mon = 100, Tue, Wed, Thu, Fri, Sat };
console.log(Days['Sun'] === 0);
console.log(Days['Mon']);
// 常数项和计算所得项，计算所得项必须必须位于最后一项
enum Color { Red, Green, Blue = "blue".length };