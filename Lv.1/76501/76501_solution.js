function solution(absolutes, signs) {
    let answer = 0;
    let pointer = 0;

    while (pointer < signs.length) {
        if (signs[pointer]) {
            answer += absolutes[pointer];
        } else {
            answer -= absolutes[pointer];
        }

        pointer++;
    }

    return answer;
}

const test1 = solution([4, 7, 12], [true, false, true]);
const test2 = solution([1, 2, 3], [false, false, true]);
console.log('test1', test1);
console.log('test2', test2);
