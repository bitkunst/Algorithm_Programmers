function solution(n) {
    let answer = 0;

    // 1. 1 이상 n 이하의 정수 순회
    for (let i = 1; i <= n; i++) {
        // 2. 나누어 떨어지면 약수
        if (n % i === 0) answer += i;
    }

    return answer;
}

const result1 = solution(12);
const result2 = solution(5);
console.log('result1', result1);
console.log('result2', result2);
