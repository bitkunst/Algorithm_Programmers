function solution(n) {
    const dp = [0, 1, 2];

    // a(n) = a(n - 1) + a(n - 2)
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }

    return dp[n];
}

const test1 = solution(4);
const test2 = solution(3);

console.log('test1', test1);
console.log('test2', test2);
