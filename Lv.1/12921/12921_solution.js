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
