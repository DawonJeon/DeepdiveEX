//Object과 Function 생성자 함수는 new 연산자 없이 호출해도 함께 호출했을 때와 동일하게 동작

let obj = new Object();
console.log(obj); // {}
obj = Object();
console.log(obj); // {}
let f = new Function('x', 'return x ** x');
console.log(f); // ƒ anonymous(x) { return x ** x }
f = Function('x', 'return x ** x');
console.log(f); // ƒ anonymous(x) { return x ** x 

//String, Number, Boolean생성자 함수는 new연산자와 함께 호출했을때는 객체를, new연산자 없이 호출시 문자열, 숫자, 불리언값 반환 
const str = String(123);
console.log(str, typeof str); // 123 string
const num = Number('123');
console.log(num, typeof num); // 123 number
const bool = Boolean('true');
console.log(bool, typeof bool); // true boolea