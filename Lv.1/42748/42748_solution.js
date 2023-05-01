function solution(array, commands) {
    let answer = [];

    // commands에 있는 이차원 배열 순회
    for (const command of commands) {
        const start = command[0];
        const end = command[1];
        const idx = command[2] - 1;

        // array에서 자르기
        const slicedArr = array.slice(start - 1, end);

        // 정렬하기
        slicedArr.sort(asc);

        // k번째 수 구하기
        answer.push(slicedArr[idx]);
    }

    return answer;
}

function asc(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const test = solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
    ],
);
console.log('test', test);
