//객체의 문제
//1. 프로토타입의 체인이 발생한다.
//2. 객체 안에 키(속성)이나 데이터의 개수가 몇 개인지 쉽게 알아 보기가 힘들다.
//3. 키(속성)의 이름은 문자로만 이루어져야 한다.
//4. 객체는 속성의 순서가 보장되지 않는다.
//5. 운행 상의 문제가 발생할 수 있다.
//객체를 이더레이션인 map으로 전환하기
const u1 = { name:"1111"};
const u2 = { name:"2222"};
const u3 = { name:"3333"};
const u4 = { name:"4444"};
const u5 = { name:"3333"};  //키가 중복
const uRole = new Map();
uRole.set(u1, "kim");
uRole.set(u2, "lee");
uRole.set(u3, "park");
uRole.set(u4, "song");
uRole.set(u5, "chang");  //중복된 키에도 데이터 저장
console.log(uRole.has(u2));
console.log(uRole.has("yang"));
console.log(uRole.get(u3));
console.log(uRole.size);

for(let u of uRole.keys()){   console.log(u.name);  } //키만 출력
for(let u of uRole.values()) { console.log(u); } //값만 출력
for(let u of uRole.entries()) { console.log(u); }  //전체 출력