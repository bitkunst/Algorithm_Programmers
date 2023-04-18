function solution(n) {
    let answer = 0;

    // n개의 boolean 값을 갖는 배열 생성
    const isPrime = new Array(n + 1).fill(true);

    // 에라토스테네스의 체 알고리즘 사용
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            answer++;
            for (let j = i + i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return answer;
}

const result1 = solution(10);
const result2 = solution(5);

console.log('result1', result1);
console.log('result2', result2);
