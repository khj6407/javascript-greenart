//프로토타입을 이용한 클래스
function Pro(name, age){
    this.name = name;
    this.age = age;
}
Pro.prototype.getInfo = function (){
    let pan = "미성년";
    if(this.age>=20) {
        pan = "성년";
    }
    return this.name+"님의 나이는 "+this.age+"세 이며, "+pan+"입니다.";
}
let m1 = new Pro("leeyejoon", 19);
let m2 = new Pro("kimhyunwoo", 64);
console.log(m1.getInfo());
console.log(m2.getInfo());