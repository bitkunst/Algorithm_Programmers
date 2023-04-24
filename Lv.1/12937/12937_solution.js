function solution(num) {
    let answer = '';

    // 1. 짝수이면 'Even'
    if (num % 2 === 0) answer = 'Even';
    // 2. 홀수이면 'Odd'
    else answer = 'Odd';

    return answer;
}

const result1 = solution(3);
const result2 = solution(4);
console.log('result1', result1);
console.log('result2', result2);
