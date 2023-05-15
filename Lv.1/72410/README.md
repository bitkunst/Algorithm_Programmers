# Programmers Level 1

### 72410 문제링크

[72410 - 신규 아이디 추천](https://school.programmers.co.kr/learn/courses/30/lessons/72410)

<br>

### Comment

-   정규표현식 활용 문제

```js
const str = '...!@BaT#*..y.abcdefghijklm';
str.replace(/[^a-z0-9-_.]/g, ''); // output: '...a..y.abcdefghijklm'
```

-   `g` : 전역 검색 플래그. 문자열 내의 모든 일치하는 부분을 찾는다. 이 플래그를 사용하지 않으면 첫 번째 일치하는 부분만 찾는다.
-   `^` : 정규표현식에서 문자열의 시작을 나타내는 메타문자
    -   `괄호 밖에서 ^` : 문자열의 시작을 의미. 예를 들어 정규표현식 /^abc/는 "abc"로 시작하는 문자열과만 일치하고 "123abc"와 같은 문자열과는 일치하지 않는다.
    -   `괄호 안에서 [^]` : 부정(negation)을 의미. 괄호 안의 문자들을 제외한 모든 문자와 일치한다. 예를 들어 /[^abc]/는 "abc" 문자를 제외한 다른 문자와 일치한다.
-   `$` : 정규표현식에서 문자열의 끝을 나타내는 메타문자

```js
const str = 'Hello, World!';
const pattern = /^Hello.*World!$/;
console.log(pattern.test(str)); // true
```

-   `^Hello` : "Hello"로 시작하는 부분과 일치
-   `.*` : 어떤 문자열이든 포함 (0개 이상)
-   `World!$` : "World!"로 끝나는 부분과 일치

```js
const str = 'Hello, World!';
const pattern1 = /^H[^i]llo/;
const pattern2 = /^[^A-Z]ello/;

console.log(pattern1.test(str)); // true
console.log(pattern2.test(str)); // false
```

-   `/^H[^i]llo/` : "H"로 시작하고 "i"가 아닌 문자가 있은 후에 "llo"로 이어지는 문자열과 일치하는지 확인. 따라서 "Hello"와 일치하여 true를 반환.
-   `/^[^A-Z]ello/` : 대문자로 시작하지 않고 "ello"로 이어지는 문자열과 일치하는지 확인. "Hello"는 대문자 "H"로 시작하기 때문에 이 패턴과 일치하지 않으므로 false를 반환.

```js
const str = '...a..y.abcdefghijklm';
const replaced = str.replace(/\.{2,}/g, '.'); // output: '.a.y.abcdefghijklm'
```

-   `\.` : `.` 은 정규표현식에서 특수문자로 해석되기 때문에 `\`를 사용하여 이스케이프 처리하여 리터럴 마침표를 찾는다.
-   `{2,}` : `{}`는 특정 횟수나 범위를 지정하는 중괄호 표기법이다. 여기서 `2,`는 최소 2회 이상의 연속된 마침표를 의미한다.
