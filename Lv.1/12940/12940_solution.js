function solution(n, m) {
    let answer = [];
    let gcd = 0;
    let lcm = 0;

    // 1. 최대공약수 찾기
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) gcd = i;
    }

    // 2. 최소공배수 구하기
    lcm = (n * m) / gcd;

    // 3. 순서대로 배열에 삽입
    answer.push(gcd);
    answer.push(lcm);

    return answer;
}

const result1 = solution(3, 12);
const result2 = solution(2, 5);
console.log('result1', result1);
console.log('result2', result2);
