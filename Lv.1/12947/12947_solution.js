function solution(x) {
    let answer = true;
    let sum = 0;

    // x를 구성하고 있는 숫자 쪼개서 배열로 만들기
    const numArr = x
        .toString()
        .split('')
        .map((v) => parseInt(v));

    // 자릿수의 합 구하기
    for (const num of numArr) {
        sum += num;
    }

    // 나누어 떨어지지 않는다면 false
    if (x % sum !== 0) answer = false;

    return answer;
}

const result1 = solution(10);
const result2 = solution(12);
const result3 = solution(11);
const result4 = solution(13);
console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
console.log('result4', result4);
