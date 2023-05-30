function solution(a, b, n) {
    let answer = 0;
    let temp = 0;

    // 빈병 a개를 가져다 주면, 콜라 b병을 준다.
    while (Math.floor(n / a) > 0) {
        answer += Math.floor(n / a) * b;
        temp = Math.floor(n / a) * b + (n % a);
        n = temp;
    }

    return answer;
}

const test1 = solution(2, 1, 20);
const test2 = solution(3, 1, 20);

console.log('test1', test1);
console.log('test2', test2);
