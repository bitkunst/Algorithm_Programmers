function solution(s) {
    let answer = '';

    const numArray = s.split(' ').map((v) => parseInt(v));
    let minNum = Math.min(...numArray);
    let maxNum = Math.max(...numArray);

    answer = minNum + ' ' + maxNum;

    return answer;
}

const test1 = solution('1 2 3 4');
const test2 = solution('-1 -2 -3 -4');
const test3 = solution('-1 -1');

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
