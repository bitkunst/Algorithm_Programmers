function solution(x, n) {
    let answer = [];
    let interval = x;

    // n개의 리스트를 만들때까지 반복
    while (answer.length < n) {
        answer.push(x);
        x += interval;
    }

    return answer;
}

const result1 = solution(2, 5);
const result2 = solution(4, 3);
const result3 = solution(-4, 2);
console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
