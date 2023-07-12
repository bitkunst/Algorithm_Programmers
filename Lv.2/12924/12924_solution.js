function solution(n) {
    // 자연수 n을 연속한 자연수들로 표현하는 방법 찾기
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        let sum = sumLoop(i, n);
        if (sum > n) continue;
        if (sum === n) answer += 1;
    }

    return answer;
}

function sumLoop(m, n) {
    let sum = 0;
    for (let i = m; i <= n; i++) {
        if (sum > n) break;
        if (sum === n) return sum;
        sum += i;
    }

    return sum;
}

const test = solution(15);
console.log('test', test);
