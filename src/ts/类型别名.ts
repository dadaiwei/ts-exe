// 类型别名用来给一个类型起个新名字。
// 类型别名，类型别名用来给一个类型起个新名字。
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName (n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
console.log(getName('类型别名'));