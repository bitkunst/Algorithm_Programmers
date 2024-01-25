# Programmers Level 2

### 17680 문제링크

[17680 - [1차] 캐시](https://school.programmers.co.kr/learn/courses/30/lessons/17680)

<br>

### Comment

-   이중 배열에서 조건에 맞는 요소 인덱스 찾기

```js
const cacheStorage = [
    ['Seoul', 0],
    ['Pangyo', 5],
    ['Jeju', 2],
];
const idx = cacheStorage.findIndex((v) => v[0] === 'Pangyo');
```

-   `shift()`
-   배열의 첫 번째 요소를 제거하고, 그 요소를 반환

```js
const array = [1, 2, 3];
const firstElement = array.shift(); // 1
console.log(array); // [2, 3]
```

-   `unshift()`
-   하나 이상의 요소를 배열의 시작 부분에 추가하고, 새로운 배열의 길이를 반환

```js
const array = [1, 2, 3];
const newLength = array.unshift(0); // 4
console.log(array); // [0, 1, 2, 3]
```
