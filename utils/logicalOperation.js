/*
    논리연산자 OR(||)는 다음의 피연산자를 반환한다
    - 둘 다 'truthy' 값이라면 첫번째 피연산자를 반환
    - 둘 다 'falsy' 값이라면 마지막 피연산자를 반환
*/

console.log(undefined || null || NaN);
console.log(5 || 2 || 1);

// JavaScript에서 'falsy' 값
/**
 * false
 * 0 (숫자 0)
 * '' or "" (빈 문자열)
 * null
 * undefined
 * NaN
 */
