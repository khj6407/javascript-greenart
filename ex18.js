class Polygon {  //메인 클래스 = 공통 클래스
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
class Square extends Polygon {  //상속 클래스 = 서브 클래스
    constructor(length){
        super(length, length);  //상속 클래스는 반드시 상속 받고자 하는 것을 super 키워드로 지정해야 this를 사용하여 연결할 수 있음
        this.name = "Square";
    }
    get area(){
        return this.height * this.width;
    }
    set area(value){
        this.value = value;
    }
}
var s = new Square(11);
console.log(s.name+"의 면적은 "+s.area);