function solution(s) {
    let answer = true;

    // 1. 문자열의 길이가 4 혹은 6이 아닌 것 필터링
    if (s.length !== 4 && s.length !== 6) {
        answer = false;
        return answer;
    }

    // 2. 문자열이 숫자로만 구성되어 있는지 테스트
    for (const letter of s) {
        if (/[A-Za-z]/.test(letter)) answer = false;
    }

    return answer;
}

const result1 = solution('a234');
const result2 = solution('1234');
console.log('result1', result1);
console.log('result2', result2);
