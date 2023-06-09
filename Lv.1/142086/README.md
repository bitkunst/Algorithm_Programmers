# Programmers Level 1

### 142086 문제링크

[142086 - 가장 가까운 같은 글자](https://school.programmers.co.kr/learn/courses/30/lessons/142086)

<br>

### Comment

-   부분 문자열 순회 방식으로 문제를 접근하였다,,
-   객체를 이용해서 문자열의 인덱스를 기록해 놓는 방식으로 푼 좋은 풀이가 있었다. 참고하면 좋을 듯하다,,

```js
function solution(s) {
    const hash = {};

    return [...s].map((v, i) => {
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}
```
