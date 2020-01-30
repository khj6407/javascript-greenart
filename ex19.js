class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    //자바스크립트는 타언어와 달리 문법적으로 구현이 되지 않는다.
    if (!this.name && !this.age) {
      console.log("동물이 웁니다. 그 동물의 이름도 나이도 모릅니다.");
    } else if (!this.name) {
      console.log("동물이 웁니다. 나이는" + this.age + "입니다.");
    } else if (!this.age) {
      console.log(this.name + "가 웁니다. 나이는 모릅니다.");
    } else {
      console.log(this.name + "가 웁니다.  나이는" + this.age + "입니다.");
    }
  }
}
class Dog extends Animal {
  //서브 클래스
  constructor(name, age) {
    super(name, age);
    this.bike = "멍멍!";
  }
  speak() {
    //메서드 오버라이드(딩) = Method override : 부모 클래스에서 정의된 메서드를 상속된 자식 클래스에서 새정의하여 사용되는 것을 의미
    if (!this.name && !this.age) {
      console.log("이름도 나이도 모를 개가" + this, bike + "짖는다.");
    } else if (!this.name) {
      console.log(
        "이름 모를 개가" + this.bike + "짖는다. 나이는 " + this.age + "입니다."
      );
    } else if (!this.age) {
      console.log(
        "이름이" + this.name + "인 개가" + this.bike + "짖는다 나이는 모른다."
      );
    } else {
      console.log(
        this.name + "가" + this.bike + "짖는다. 나이는" + this.age + "이다."
      );
    }
  }
}
let a1 = new Animal();
let a2 = new Animal("코끼리");
let a3 = new Animal("기린", 23);
a1.speak();
a2.speak();
a3.speak();
let d1 = new Dog();
let d2 = new Dog("망망이");
let d2 = new Dog("망투", 3);
d1.speak();
d2.speak();
d3.speak();
