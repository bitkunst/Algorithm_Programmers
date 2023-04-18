function solution(n) {
    let answer = '';

    // 0 ~ n 순회
    for (let i = 0; i < n; i++) {
        // 짝수이면 "수" , 홀수이면 "박"
        if (i % 2 === 0) answer += '수';
        else answer += '박';
    }

    return answer;
}

const result1 = solution(3);
const result2 = solution(4);
console.log('result1', result1);
console.log('result2', result2);
