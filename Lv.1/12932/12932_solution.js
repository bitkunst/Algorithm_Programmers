function solution(n) {
    let answer = [];
    let numArr = n
        .toString()
        .split('')
        .map((v) => parseInt(v));
    let pointer = numArr.length - 1;

    for (let i = pointer; i >= 0; i--) {
        answer.push(numArr[i]);
    }
    return answer;
}

const result1 = solution(12345);
const result2 = solution(67890);
console.log('result1', result1);
console.log('result2', result2);
