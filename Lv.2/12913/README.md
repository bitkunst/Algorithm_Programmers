# Programmers Level 2

### 12913 문제링크

[12913 - 땅따먹기](https://school.programmers.co.kr/learn/courses/30/lessons/12913)

<br>

### Comment

-   Edge case

```js
// parameter
let param = [
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
];
// answer : 20
```

-   처음엔 stack을 이용해서 최대값의 인덱스를 쌓는 방식으로 접근했는데, 위에서 작성한 edge case와 같이 행에 동일한 값들이 있을 경우 인덱스를 찾는 과정에서 문제가 발생한다,,
-   결국 다이나믹 프로그래밍(Dynamic Programming)을 활용해야만 풀 수 있었다,,
-   너무나도 까다로운 DP,,,
