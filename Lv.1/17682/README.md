# Programmers Level 1

### 17682 문제링크

[17682 - [1차] 다트 게임](https://school.programmers.co.kr/learn/courses/30/lessons/17682)

<br>

### Comment

-   특정 문자열 치환 정규표현식

```js
let str = 'BanAnA';
let newStr = str.replace(/a/g, 1); // 대소문자 구분
let newStr2 = str.replace(/a/gi, 1); // 대소문자 구분 X

console.log(newStr); // B1nAnA
console.log(newStr2); // B1n1n1
```
