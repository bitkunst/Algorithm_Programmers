# Programmers Level 1

### 81301 문제링크

[81301 - 숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

<br>

### Comment

-   JavaScript에서 문자열 리터럴에 변수를 삽입하기 위해서는 `${변수명}` 구문을 사용한다.
-   하지만 정규표현식 리터럴 `/.../` 내에서는 `${변수명}` 구문을 사용할 수 없다.
-   변수를 정규 표현식에 삽입하기 위해서는 `new RegExp()` 생성자를 사용해야 한다.

```js
const variable = 'hello';
const regExp = new RegExp(variable, 'g'); // 두번째 인수는 정규표현식의 플래그
const testString = 'hello world, hello universe';
const result = testString.replace(regExp, 'hi');

console.log(result); // output: hi world, hi universe
```

-   `g` 플래그 : "global"의 약자로 이 플래그가 설정되면 텍스트 전체에서 패턴과 일치하는 모든 부분을 찾는다. 이 플래그가 없으면 텍스트에서 패턴과 처음으로 일치하는 부분만 찾는다.
-   `i` 플래그 : "ignore case"의 약자로 이 플래그가 설정되면 대소문자를 구분하지 않고 검색한다. 즉, 패턴에서 대문자와 소문자를 같은 것으로 취급한다.
-   `gi` : `g` 플래그 + `i` 플래그
