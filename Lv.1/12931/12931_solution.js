function solution(n) {
    let answer = 0;
    const numString = n.toString();
    const numArray = numString.split('').map((v) => parseInt(v));

    for (const num of numArray) {
        answer += num;
    }

    return answer;
}

const result1 = solution(123);
const result2 = solution(987);
console.log('result1', result1);
console.log('result2', result2);
