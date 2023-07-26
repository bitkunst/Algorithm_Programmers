function solution(arr) {
    let answer = 0;
    const stack = [];

    while (arr.length > 0) {
        let num1, num2;

        if (stack.length === 0) num1 = arr.splice(0, 1);
        else num1 = stack.pop();

        num2 = arr.splice(0, 1);

        // 두 수의 최소 공배수 = 두 수의 곱 / 최대공약수
        answer = (num1 * num2) / gcd(num1, num2);
        stack.push(answer);
    }

    return answer;
}

// 두 수의 최대공약수 구하기
function gcd(n, m) {
    const divisorCounter = {};
    const commonDivisors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorCounter[i] = (divisorCounter[i] || 0) + 1;
        }
    }

    for (let j = 1; j <= m; j++) {
        if (m % j === 0) {
            divisorCounter[j] = (divisorCounter[j] || 0) + 1;
        }
    }

    // 공통된 약수 찾기
    for (key in divisorCounter) {
        if (divisorCounter[key] === 2) commonDivisors.push(parseInt(key));
    }

    return Math.max(...commonDivisors);
}

const test1 = solution([2, 6, 8, 14]);
const test2 = solution([1, 2, 3]);

console.log('test1', test1);
console.log('test2', test2);
