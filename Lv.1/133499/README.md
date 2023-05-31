# Programmers Level 1

### 133499 문제링크

[133499 - 옹알이 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/133499)

<br>

### Comment

-   졍규식을 활용하면 보다 간결하게 풀 수 있는 문제였던 것 같다.

```js
function solution(babbling) {
    let answer = 0;
    const pattern1 = /(aya|ye|woo|ma)\1+/;
    const pattern2 = /^(aya|ye|woo|ma)+$/;

    answer = babbling.reduce((acc, v) => {
        !pattern1.test(v) && pattern2.test(v) ? ++acc : acc;
        return acc;
    }, 0);

    return answer;
}
```

**/(aya|ye|woo|ma)\1+/**

-   `(aya|ye|woo|ma)` : "aya", "ye", "woo", "ma" 중 하나의 문자열을 나타낸다. 이 문자열들을 | (파이프)로 구분하고, 괄호로 그룹화하여 하나의 단위로 취급한다.
-   `\1` : 이전에 매칭된 첫 번째 그룹(여기서는 (aya|ye|woo|ma))과 같은 문자열을 나타낸다. 이를 "backreference"라고 한다.
-   `+` : 바로 앞의 패턴이 1회 이상 반복되는 것을 나타낸다. 여기서는 첫 번째 그룹과 같은 문자열이 1회 이상 반복되는 것을 의미한다.

**/^(aya|ye|woo|ma)+$/**

-   `^` : 문자열의 시작을 나타낸다.
-   `(aya|ye|woo|ma)` : "aya", "ye", "woo", "ma" 중 하나의 문자열을 나타낸다. 이 문자열들을 | (파이프)로 구분하고, 괄호로 그룹화하여 하나의 단위로 취급한다.
-   `+` : 바로 앞의 패턴이 1회 이상 반복되는 것을 나타낸다. 여기서는 "aya", "ye", "woo", "ma" 중 하나의 문자열이 1회 이상 반복되는 것을 의미한다.
-   `$` : 문자열의 끝을 나타낸다.
