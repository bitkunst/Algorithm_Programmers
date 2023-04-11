function solution(s) {
    let answer = '';
    let strLength = s.length;
    // 단어의 길이가 홀수일 경우
    if (strLength % 2 == 1) answer = s[(strLength - 1) / 2];
    // 단어의 길이가 짝수일 경우
    else answer = s[strLength / 2 - 1] + s[strLength / 2];

    return answer;
}

const result1 = solution('abcde');
const result2 = solution('qwer');
console.log('result1', result1);
console.log('result2', result2);
