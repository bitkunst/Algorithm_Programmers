function solution(num) {
    let answer = 0;

    // 1. num 값이 1인 경우
    if (num === 1) return answer;

    // 2. num이 1이 될 때까지 반복 작업
    while (num !== 1) {
        // 작업이 500 이상일 경우 -1 반환
        if (answer === 500) {
            answer = -1;
            break;
        }

        // 짝수일 경우 , 홀수일 경우에 따른 작업 처리
        if (num % 2 === 0) {
            num = num / 2;
            answer++;
        } else {
            num = num * 3 + 1;
            answer++;
        }
    }

    return answer;
}

const result1 = solution(6);
const result2 = solution(16);
const result3 = solution(626331);

console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
