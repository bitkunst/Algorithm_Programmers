// JavaScript 비트연산자

let a = 5; // 101
let b = 3; // 011

// Bitwise AND(&)
console.log(a & b); // decimal: 1 , binary: 001
// output: 1

// Bitwise OR(|)
console.log(a | b); // decimal: 7 , binary: 111
// output: 7

// Bitwise XOR(^)
console.log(a ^ b); // decimal: 6 , binary: 110
// output: 6

// Bitwise NOT(~)
// 피연산자의 모든 비트를 반전시킨다
console.log(~a); // output: -6

// Left shift(<<)
// 피연산자의 이진 표현을 왼쪽으로 shift
console.log(a << 1); // decimal: 10 , binary: 1010

// Right shift(>>)
console.log(a >> 1); // decimal: 2 , binary: 10

// toBinary
let decimal = 10;
let binaryString = decimal.toString(2);
console.log('binaryString', binaryString);

// toDecimal
let binary = '0011';
let decimalNumber = parseInt(binary, 2);
console.log('decimalNumber', decimalNumber);
