//클래스 만들기2
//생성자 함수에 의한 클래스 만들기-틀만 정의
function Pro(name, price){
    this.name = name;
    this.price = price;
    this.getInfo = function(){
        return "제품이름은 "+this.name + "이며, 가격은 "+this.price+"입니다.";
    }
}
let p1 = new Pro("leedonguk", 3000);  //new는 생성자 함수를 이용하여 인스턴스를 만드는 키워드
let p2 = new Pro("yangsungho", 2500);
let p3 = new Pro();
p3.name = "kimyoungsoo";
p3.price = 1950;
console.log(p1.getInfo());
console.log(p2.getInfo());
console.log(p3.getInfo());