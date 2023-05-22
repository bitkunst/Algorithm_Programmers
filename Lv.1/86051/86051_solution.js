function solution(numbers) {
    let answer = 0;
    let numCounter = {};

    // 숫자 카운터 세팅
    for (let i = 0; i < 10; i++) {
        numCounter[i] = 0;
    }

    for (const num of numbers) {
        numCounter[num] += 1;
    }

    // 없는 숫자 더하기
    Object.entries(numCounter).forEach((v) => {
        if (v[1] === 0) answer += parseInt(v[0]);
    });

    return answer;
}

const test1 = solution([1, 2, 3, 4, 6, 7, 8, 0]);
const test2 = solution([5, 8, 4, 0, 6, 7, 9]);
console.log('test1', test1);
console.log('test2', test2);
