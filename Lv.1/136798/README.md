# Programmers Level 1

### 136798 문제링크

[136798 - 기사단원의 무기](https://school.programmers.co.kr/learn/courses/30/lessons/136798)

<br>

### Comment

-   약수의 개수를 구하는 알고리즘에서 시간 단축이 필요했다. (일반적인 방법으로는 시간초과 발생)

number의 약수가 1일때 다른 약수는 `number / 1` 이 되므로 다른 하나의 약수는 number가 된다.
<br>
다시말해 number의 약수 중 하나가 i 라고 했을 때, 다른 약수는 `number / i`가 되므로 하나의 약수를 알면 다른 하나의 존재가 보장되는 것이다.
<br>
따라서 다음과 같은 방법으로 약수의 개수를 보다 효율적으로 구할 수 있다.
<br>

```js
let number = 12345;
let count = 0;

for (let i = 1; i * i <= number; i++) {
    if (i * i === number) count++;
    else if (number % i === 0) count += 2;
}
```
