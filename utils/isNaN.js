/**
 * `NaN`은 IEEE754 표준에 따라 특별하게 처리된다
 * `NaN`은 어떤 값과도 동일하지 않다. (자기 자신과 비교하더라도,,)
 * `NaN` === `NaN` : false
 * `NaN` !== `NaN` : true
 */

console.log(NaN === NaN);
console.log(NaN !== NaN);

// NaN 값을 확인하고자 할 때는 isNaN() 메소드를 사용하는 것이 좋다.
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
