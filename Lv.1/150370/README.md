# Programmers Level 1

### 150370 문제링크

[150370 - 개인정보 수집 유효기간](https://school.programmers.co.kr/learn/courses/30/lessons/150370)

<br>

### Comment

-   역시 카카오,,,
-   다른 풀이 중 참고할 만한 아이디어는 날짜를 숫자화 해서 푸는 방식인 것 같다,,
-   날짜라는 고정관념에만 얽매여서,, 특정 날짜를 넘겼는지, 넘기지 않았는지에 대한 판단은 숫자 비교를 통해서도 가능하다는 사실을 놓치고 있었다,,
-   날짜 계산에 애를 먹었는데,,, 허망하다,,ㅎ

```js
const today = '2023.06.12';
const dueDay = '2023.12.31';

/*
모든 달이 28일 이라고 가정했을 때,
today는 (2023 * 12 * 28) + (6 * 28) + 12 로 표현할 수 있고,
dueDay는 (2023 * 12 * 28) + (12 * 28) + 31 로 표현할 수 있다.
그런 다음 today 와 dueDay의 크기 비교를 통해 날짜가 지났는지, 안 지났는지를 판단할 수 있다.
*/
```
