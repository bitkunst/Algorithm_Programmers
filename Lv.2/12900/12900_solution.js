function solution(n) {
    let answer = 0;
    // 메모이제이션 기법 사용
    const memo = { 1: 1, 2: 2 };

    answer = recursion(n);

    // a(n+2) = a(n+1) + a(n)
    function recursion(m) {
        if (!memo[m]) {
            memo[m] = (recursion(m - 1) + recursion(m - 2)) % 1000000007;
            return memo[m];
        } else {
            return memo[m];
        }
    }

    return answer;
}

function dpSolution(n) {
    let answer = 0;
    const tile = [1, 2];

    // 다이나믹 프로그래밍(DP)
    for (let i = 2; i < n; i++) {
        // a(n+2) = a(n+1) + a(n)
        tile[i] = (tile[i - 1] + tile[i - 2]) % 1000000007;
    }

    answer = tile[n - 1];

    return answer;
}

const test = dpSolution(4);
console.log('test', test);
