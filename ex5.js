console.log("for문");
const colors = ["red", "yellow", "green", "pink", "blue", "orange"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// red
// yellow
// green
// pink
// blue
// orange
console.log("for문 2");
for (let key in colors) {
  console.log(key + ":" + colors[key]);
}
// 0:red
// 1:yellow
// 2:green
// 3:pink
// 4:blue
// 5:orange
console.log("while문");
var i = 0;
while (colors[i] != null) {
  console.log(colors[i]);
  i++;
}
// red
// yellow
// green
// pink
// blue
// orange
// 5
console.log("forEach문1");
colors.forEach(function(value) {
  console.log(value);
});
// red
// yellow
// green
// pink
// blue
// orange
console.log("forEach문2");
colors.forEach(value => console.log(value));
// red
// yellow
// green
// pink
// blue
// orange
