function solution(n) {
    // 자연수 n을 연속한 자연수들로 표현하는 방법 찾기

    // 자기 자신으로 표현되는 경우 미리 추가
    let answer = 1;
    if (n === 1) return answer;

    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        let sum = sumLoop(i, n);
        if (sum > n) continue;
        if (sum === n) answer += 1;
    }

    return answer;
}

function sumLoop(m, n) {
    let sum = 0;
    for (let i = m; i <= Math.ceil(n / 2); i++) {
        if (sum >= n) break;
        sum += i;
    }

    return sum;
}

const test1 = solution(15);
const test2 = solution(1);

console.log('test1', test1);
console.log('test2', test2);
