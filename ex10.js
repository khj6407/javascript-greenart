const set = new Set();
set.add("kim");
set.add("lee");
set.add("park");
set.add("yang");
set.add("song");
console.log("## Output by forEach ##");
set.forEach((value) => console.log(value));
console.log("## Output by for-of ##");
for(let item of set){ console.log(item); }
set.delete("park");  //park 요소 제거
console.log(set.has("park"));  //park 존재 유무

let arr = Array.from(set);
console.log("## set을 배열로 전환하기 ##");
console.log(arr);
