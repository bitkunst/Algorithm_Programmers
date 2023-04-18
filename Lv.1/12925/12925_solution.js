function solution(s) {
    let answer = 0;
    answer = parseInt(s);

    return answer;
}

function stringToInteger() {
    let answer = 0;

    // 부호가 "-"인 경우
    if (s[0] === '-') {
        const numStr = s.split('-')[1];
        answer = 0 - Number(numStr);
    } else {
        answer = Number(s);
    }

    return answer;
}

const result1 = solution('1234');
const result2 = solution('-1234');
console.log('result1', result1);
console.log('result2', result2);
