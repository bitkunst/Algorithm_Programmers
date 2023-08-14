# Programmers Level 2

### 12985 문제링크

[12985 - 예상 대진표](https://school.programmers.co.kr/learn/courses/30/lessons/12985)

<br>

### Comment

-   Closure 와 Recursion을 사용해서 문제를 풀었다.
-   참고할 만한 좋은 풀이가 있어서 첨부해본다.

```js
function solution(n, a, b) {
    let answer = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}
```
