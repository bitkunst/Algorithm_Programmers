# Programmers Level 2

### 12953 문제링크

[12953 - N개의 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12953)

<br>

### Comment

-   최대공약수(gcd)를 너무 복잡하게 구한 것 같다.
-   최대 공약수를 구하는 좋은 알고리즘이 있어서 가져와 보았다.

```js
function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}
// 1. 큰 수를 작은 수로 나눈 나머지를 구한다. (mod 연산)
// 2. 나눴던 수와 나머지로 또 mod 연산을 한다.
// 3. 나머지가 0이 됐을 때, 마지막 계산에서 나누는 수로 사용된 수가 최대공약수가 된다.
```
