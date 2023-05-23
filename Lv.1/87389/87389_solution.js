function solution(n) {
    let answer = 0;

    // 나머지가 1이 되는 최소 자연수 찾기
    for (let i = 1; i < n; i++) {
        if (n % i === 1) {
            answer = i;
            break;
        }
    }

    return answer;
}

const test1 = solution(10);
const test2 = solution(12);
console.log('test1', test1);
console.log('test2', test2);
