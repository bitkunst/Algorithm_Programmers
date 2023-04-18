# Programmers Level 1

### 12925 문제링크

[12925 - 문자열을 정수로 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/12925)

<br>

### Comment

JavaScript 형변환 정리
<br>
<br>

**_string -> number_**

-   parseInt() : 문자열을 정수로 변환
-   parseFloat() : 문자열을 부동소수점 숫자로 변환
-   Number() : 다양한 형태의 값을 숫자로 변환. 변환할 수 없는 값은 NaN을 반환
-   단항 더하기 연산자(+) : 문자열 앞에 `+`를 붙여 숫자로 변환

```js
let num = +'23';
console.log(typeof num); // number
```

<br>

**_number -> string_**

-   String() : 숫자를 문자열로 변환
-   toString() : 숫자 객체의 메소드를 사용하여 숫자를 문자열로 변환
-   문자열 병합 : 빈 문자열('')을 숫자에 더하여 문자열로 변환

```js
let num = 23;

let str1 = String(num); // "23"
let str2 = num.toString(); // "23"
let str3 = (num += ''); // "23"
```
