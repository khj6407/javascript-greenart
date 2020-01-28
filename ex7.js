const colors = ["red", "green", "blue"];
console.log("원래 배열값 :" + colors);

colors.push("violet");
console.log("요소를 추가한 후:" + colors);
// 요소를 추가한 후:red,green,blue,violet

colors.pop();
console.log("요소를 제거한  후:" + colors);
// 요소를 제거한  후:red,green,blue

colors.sort();
console.log("요소를 정렬한 후 :" + colors);
//요소를 정렬한 후 :blue,green,red,violet

colors.reverse();
console.log("요소를 역순으로 바꾼 후 :" + colors);
//요소를 역순으로 바꾼 후 :violet,red,green,blue

colors.push("balck");
const splColor = colors.splice(0, 2);
console.log("스플라이스 한 후1 : " + splColor);
//스플라이스 한 후1 : violet,red
console.log("스플라이스 한 후2 :" + colors);
//스플라이스 한 후2 :green,blue,balck

const newColor = colors.join("-");
console.log("join을 한 후: " + newColor);
//join을 한 후: green-blue-balck
