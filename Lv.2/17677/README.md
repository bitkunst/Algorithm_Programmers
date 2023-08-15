# Programmers Level 2

### 17677 문제링크

[17677 - [1차] 뉴스 클러스터링](https://school.programmers.co.kr/learn/courses/30/lessons/17677)

<br>

### Comment

-   정규식 활용 문제,, 언제나 새로운 정규식,,
-   문자열이 소문자 a-z 또는 대문자 A-Z 만으로 구성되어 있는지 확인하기 위한 정규식

```js
function isAlphabetOnly(str) {
    return /^[a-zA-Z]+$/.test(str);
}
```
