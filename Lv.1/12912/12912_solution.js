function solution(a, b) {
    let answer = 0;

    // 1. a < b 인 경우
    if (a < b) {
        for (let i = a; i <= b; i++) {
            answer += i;
        }
    } else if (a > b) {
        // 2. a > b 인 경우
        for (let i = b; i <= a; i++) {
            answer += i;
        }
    } else {
        // 3. a = b 인 경우
        answer = a;
    }

    return answer;
}

const result1 = solution(3, 5);
const result2 = solution(3, 3);
const result3 = solution(5, 3);
console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
