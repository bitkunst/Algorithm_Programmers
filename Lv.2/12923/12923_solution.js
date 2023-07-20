function solution(begin, end) {
    const answer = [];

    // 자기 자신을 제외한 최대 약수 구하기
    for (let i = begin; i <= end; i++) {
        // 첫번째 블록은 0
        if (i === 1) {
            answer.push(0);
            continue;
        }

        const maxDivisor = findMaxDivisor(i);
        answer.push(maxDivisor);
    }

    return answer;
}

function findMaxDivisor(n) {
    const divisorArr = [];
    const sqrt = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= sqrt + 1; i++) {
        if (n % i === 0) {
            divisorArr.push(i);
            // 최대 약수가 10^7을 넘지 않아야 한다.
            if (n / i <= 10 ** 7) return n / i;
        }
    }

    if (divisorArr.length >= 1) {
        return divisorArr[divisorArr.length - 1];
    }

    // 소수(prime)일 경우
    return 1;
}

const test1 = solution(100_000_014, 100_000_016); // [6, 5, 6_250_001]
console.log('test1', test1);
