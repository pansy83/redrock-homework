//第1个例子
// function f(radius){
//     let area=Math.PI * (radius*radius)
//     return area.toFixed(0);
// }
// let a=[10,20,30]
// let a1=a.map(f)
// console.log(a1)


//第2个例子
// let obj={
//     val:10,
//     f:function(value){
//         return value % this.val
//     }
// }
// let obj2={
//     val:3
// }
// let a=[6,12,25,30];
// let a1=a.map(obj.f,obj2);
// console.log(a1)


// //第3个例子
// let b=[9,16,100]
// let b1=b.map(Math.sqrt);
// console.log(b1)


//第4个例子
function f1(index,str){
    return str.substring(index-1,index+2)
}
let s="Thursday"
let c=[].map.call(s,f1)
console.log(c)
//解释一下str.substring
// let str = "Hello";
// let index = 2; // 假设 index 是字符串中某个字符的索引
// let substring = str.substring(index-1, index+2);
// console.log(substring); // 输出 "ell"

//call() 方法是 Function 对象的原型方法之一，
//它允许你以指定的 this 值和单独给出的参数（参数列表）来调用一个函数。
//具体说，它允许你调用一个函数，指定函数中的 this 值，并将函数的参数以逗号分隔的列表形式传递给该函数。
const obj = {
    num: 10
  };
  
  function add(a, b) {
    return this.num + a + b;
  }
  
  let result = add.call(obj, 5, 7);
  console.log(result); // 输出 22
  