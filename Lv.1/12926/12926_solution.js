function solution(s, n) {
    let answer = '';
    // 1. 대문자/소문자로 구성된 문자열 세트를 만들기
    const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const smallLetterObj = {};
    const capitalLetterObj = {};

    // 2. 문자열 세트에서 문자에 해당하는 인덱스 값을 갖는 객체 만들기
    for (let i = 0; i < 26; i++) {
        smallLetterObj[smallLetters[i]] = i;
        capitalLetterObj[capitalLetters[i]] = i;
    }

    // 3. 시저 암호 루프 돌리기
    for (const str of s) {
        if (str in smallLetterObj) {
            const index = smallLetterObj[str];
            answer += smallLetters[(index + n) % 26];
        }
        if (str in capitalLetterObj) {
            const index = capitalLetterObj[str];
            answer += capitalLetters[(index + n) % 26];
        }
        if (str === ' ') {
            answer += str;
        }
    }

    return answer;
}

const result1 = solution('AB', 1);
const result2 = solution('z', 1);
const result3 = solution('a B z', 4);
console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
