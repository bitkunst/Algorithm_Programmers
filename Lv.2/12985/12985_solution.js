function solution(n, a, b) {
    let answer = 0;

    function match(n, a, b) {
        if (n === 1) return answer;

        // 서로 인접한 경우
        if (a % 2 === 1 && a + 1 === b) return answer + 1;
        else if (b % 2 === 1 && b + 1 === a) return answer + 1;

        // 서로 인접하지 않은 경우
        n = n / 2;
        a = a % 2 === 1 ? Math.floor(a / 2) + 1 : a / 2;
        b = b % 2 === 1 ? Math.floor(b / 2) + 1 : b / 2;
        answer += 1;

        return match(n, a, b);
    }

    return match(n, a, b);
}

const test = solution(8, 4, 7);
console.log('test', test);
