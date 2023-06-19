# Programmers Level 1

### 161990 문제링크

[161990 - 바탕화면 정리](https://school.programmers.co.kr/learn/courses/30/lessons/161990)

<br>

### Comment

-   stack 자료구조를 이용해야겠다는 생각에 문제를 너무 어렵게 접근한 것 같다,,
-   한 가지 풀이법에만 매몰되지 않도록 주의해야 할 필요가 있다,,
-   참고해 볼 만한 좋은 풀이가 있어 첨부해본다,,

```js
// 모든 좌표값을 모아서 최소/최대 값을 구한다
function solution(wallpaper) {
    let left = [];
    let top = [];
    let right = [];
    let bottom = [];
    wallpaper.forEach((v, i) => {
        [...v].forEach((val, idx) => {
            if (val === '#') {
                left.push(i);
                top.push(idx);
                right.push(i + 1);
                bottom.push(idx + 1);
            }
        });
    });
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)];
}
```
