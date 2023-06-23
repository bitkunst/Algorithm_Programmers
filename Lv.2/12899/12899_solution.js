function solution(n) {
    let answer = '';
    while (n > 0) {
        if (n % 3 !== 0) {
            // 3으로 나누어 떨어지지 않는 경우
            answer += (n % 3).toString();
            n = Math.floor(n / 3);
        } else {
            // 3으로 나누어 떨어지는 경우
            answer += '4';
            n = Math.floor(n / 3) - 1;
        }
    }

    return answer.split('').reverse().join('');
}

const test = solution(10);
console.log('test', test);
