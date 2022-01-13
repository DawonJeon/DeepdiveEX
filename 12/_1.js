function add(x,y) {
    return x + y;
}

console.log(add);

console.dir(add);

/**
 * Node.js에서는 동일한 결과 function: add가 나온다
 * Browser환경에서는
 * console.log(add); 결과 : function add(x,y) {return x+y;} 끝
 * console.dir(add); 결과 : 객체의 프로퍼티, f add(x,y) arguments,caller,length,name,prototype이 모두나옴
 * 
 */

// var add = function foo(x,y) {
//     return x + y;
// ;}

// console.log(add(2,5));
//함수이름은 foo이나 함수호출은 식별자 add로만 가능
// 함수이름은 함수내부에서만 적용된다.
//함수 외부에서 함수를 호출할때는 반드시 식별자를 사용해야함. 

// function add(x,y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('인수는 모두 숫자값이어야 합니다.');
//     }

//     return x+y;
// }

// console.log(add(2));
// console.log(add('a','b'));

function add(a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1,2,3));
console.log(add(1,2));
console.log(add(1));
console.log(add());


function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

let num = 100;
let person = {name : 'Lee'};

console.log(num);
console.log(person);

changeVal(num, person);
console.log(num);
console.log(person);


/**재귀함수:  자기자신을 호출하는것,
 * for문사용없이도 반복문을 재귀함수를 사용해서 이용할 수 있다. 
*/

function countdown(n) {
    if (n <= 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(10);

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial (n-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));

//함수 표현식이든일때 식별자 & 함수 이름 둘다 함수내부에서 호출가능
//함수 선언식에서는 함수이름으로 함수내부에서 호출 가능 (어차피 식별자 없으니까)
//함수 외부에서 함수를 호출할때는 반드시 식별자로만 가능함. 


function factorial(n) {
    if (n <= 1) return 1;
    var res = n;
    while (--n) res *= n;
    return res;
}

console.log(factorial(5));


/**
 * 콜백함수 :  함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수 
 * 고차함수 : 매개변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수
 * @param {*} n 
 * @param {*} f 
 */

function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logAll = function(i) {
    console.log(i);
};

repeat(5, logAll);

var logOdds = function(i) {
    if ( i % 2) console.log(i);
};

repeat(5, logOdds);