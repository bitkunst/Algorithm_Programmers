function solution(n) {
    // Dynamic Programming
    const dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }

    return dp[n];
}

const test1 = solution(3);
const test2 = solution(5);

console.log('test1', test1);
console.log('test2', test2);
