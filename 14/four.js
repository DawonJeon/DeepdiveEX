var x = 'global';

function foo() {
 console.log(x); // ①
 var x = 'local';
}

foo();
console.log(x);

// /**변수의 생명주기 */

// function foo() {
//     var x = 'local';
//     console.log(x);
//     return x;
// }

// foo();
// console.log(x);


var x = 'global';

function foo() {
    // console.log(x);
    var x = 'local';
    console.log(x);
}

foo();
console.log(x);