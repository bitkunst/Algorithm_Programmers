// f(n) = f(n-2) * 3 + f(n-4) * 2 + ... + f(2) * 2 + 2

function solution(n) {
    const dp = {
        2: 3,
        4: 11,
    };

    // 가로의 길이가 홀수일 경우
    if (n % 2 === 1) return 0;

    // a(n) = 3 * a(n - 2) + 2 * a(n - 4) + 2 * a(n - 6) + ... + 2 * a(2) + 2
    for (let i = 6; i <= n; i += 2) {
        dp[i] = 3 * dp[i - 2] + 2;
        for (let j = i - 4; j >= 2; j -= 2) {
            dp[i] += dp[j] * 2;
        }

        dp[i] %= 1000000007;
    }

    return dp[n];
}

const test = solution(4);

console.log('test', test);
