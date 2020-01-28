var num1 = [20, 30, 10, 40, 50];
var num2 = new Array(70, 40, 20, 44, 05);
console.log("num1의 요소의 수" + num1.length);
// num1의 요소의 수5
var mixArr = ["a", 10, "b", 20, new Date(), "kim"];
var objArr = [
  {
    id: 20200128,
    name: "hohoho",
    dept: "dev"
  },
  {
    id: 20202020,
    name: "hello",
    dept: "designer"
  }
];
var obj = { num: 1004, name: "park", position: "publisher" };

console.log(num1);
// [ 20, 30, 10, 40, 50 ]
console.log(num2);
// [ 70, 40, 20, 44, 5 ]
console.log(mixArr);
// [ 'a', 10, 'b', 20, 2020-01-28T03:27:27.577Z, 'kim' ]
console.log(objArr);
// [
//   { id: 20200128, name: 'hohoho', dept: 'dev' },
//   { id: 20202020, name: 'hello', dept: 'designer' }
// ]
console.log(objArr[2].name, objArr[2].dept);

console.log(obj);
// { num: 1004, name: 'park', position: 'publisher' }
