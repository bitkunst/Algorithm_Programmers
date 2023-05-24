# Programmers Level 1

### 92334 문제링크

[92334 - 신고 결과 받기](https://school.programmers.co.kr/learn/courses/30/lessons/92334)

<br>

### Comment

-   데이터셋을 만들 때 value 값을 배열로 만들었기 때문에 추가적인 연산이 발생한 것 같다.
-   처음부터 중복을 제거한다면 시간 복잡도를 좀 더 낮출 수 있을 것 같다.
-   ps.다른 사람의 풀이 중 Map을 사용한 좋은 풀이가 있어서 가져와 보았다.

```js
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map((a) => {
        return a.split(' ');
    });
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    }
    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }
    let answer = id_list.map((a) => good.get(a) || 0);
    return answer;
}
```
