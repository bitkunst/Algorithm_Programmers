# Programmers Level 1

### 135808 문제링크

[135808 - 과일 장수](https://school.programmers.co.kr/learn/courses/30/lessons/135808)

<br>

### Comment

-   매개변수 k의 효용성을 잘 모르겠다,, (매개변수 k를 사용하지 않고 문제를 해결)
-   사과 상자를 만들 때 다음과 같은 방법을 사용했었는데, 시간 초과가 발생하였다.
-   splice() 역시 배열의 인덱스를 변경하므로, 최악의 경우 while문 안에서 splice() 메소드를 사용한 것이 시간 복잡도를 O(N^2)으로 만들지 않았을까 생각해 본다,,

```js
// 2. 사과 상자 만들기
while (score.length >= m) {
    const appleBox = score.splice(0, m);
    appleBoxList.push(appleBox);
}
```
