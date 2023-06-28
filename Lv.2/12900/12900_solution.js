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

const test = solution(8);
console.log('test', test);
