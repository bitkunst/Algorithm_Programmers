# Programmers Level 1

### 12915 문제링크

[12915 - 문자열 내 마음대로 정렬하기](https://school.programmers.co.kr/learn/courses/30/lessons/12915)

<br>

### Comment

sort() 메소드는 기본적으로 배열의 요소들을 문자열로 변환한 후, 각 문자열의 유니코드 코드 포인트 값을 기준으로 오름차순으로 정렬한다.
<br>
그러나, 일부 브라우저 및 JavaScript 엔진에서는 숫자 배열의 경우 자동으로 숫자를 기준으로 정렬하는 경우가 있다.
<br>
최신 JavaScript 엔진에서는 숫자 배열에 sort() 메소드를 콜백 함수 없이 사용했을 때, 오름차순으로 알맞게 정렬되는 것을 확인할 수 있다.
<br>
그러나, 이러한 동작이 모든 브라우저 및 JavaScript 엔진에서 동일하게 보장되지는 않으므로, 숫자 배열을 정렬할 때는 명시적으로 콜백 함수를 사용하는 것이 좋다.
<br>
<br>
콜백 함수를 사용해 정렬 기준을 직접 지정할 수 있다.
<br>
콜백 함수의 return 값은 정렬 알고리즘이 각 요소를 비교하는데 사용된다.
<br>

-   return -1 : 첫번째 인자를 두번째 인자보다 작다고 판단하여 정렬. 첫번째 인자가 두번째 인자 앞에 위치하게 함.
-   return 1 : 첫번째 인자를 두번째 인자보다 크다고 판단하여 정렬. 첫번째 인자가 두번째 인자 뒤에 위치하게 함.
-   return 0 : 두 값이 같다고 판단하여 정렬하지 않음.

```js
function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const arr = [3, 1, 4, 1, 5, 9];
arr.sort(compare);
console.log(arr); // [1, 1, 3, 4, 5, 9]
```
