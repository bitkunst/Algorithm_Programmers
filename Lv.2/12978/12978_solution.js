function solution(N, road, K) {
    const answerStack = [];
    const timeArr = [];

    // road 배열 정렬하기
    for (const item of road) {
        if (item[0] < item[1]) continue;
        else {
            const temp = item[0];
            item[0] = item[1];
            item[1] = temp;
        }
    }

    function countTime(currentTarget, road, time, goal) {
        let sumOfTime = time;

        if (currentTarget === 1) {
            timeArr.push([sumOfTime, goal]);
            return;
        }

        for (const item of road) {
            let tempTime = sumOfTime;
            if (item[1] === currentTarget) {
                tempTime += item[2];
                const newTarget = item[0];
                countTime(newTarget, road, tempTime, goal);
            }
        }
    }

    for (let i = N; i >= 1; i--) {
        countTime(i, road, 0, i);
    }

    for (const item of timeArr) {
        // 이미 추가된 마을은 skip
        if (answerStack[answerStack.length - 1] === item[1]) continue;
        if (item[0] <= K) answerStack.push(item[1]);
    }

    return answerStack.length;
}

const test1 = solution(
    5,
    [
        [1, 2, 1],
        [2, 3, 3],
        [5, 2, 2],
        [1, 4, 2],
        [5, 3, 1],
        [5, 4, 2],
    ],
    3,
);
const test2 = solution(
    6,
    [
        [1, 2, 1],
        [1, 3, 2],
        [2, 3, 2],
        [3, 4, 3],
        [3, 5, 2],
        [3, 5, 3],
        [5, 6, 1],
    ],
    4,
);

console.log('test1', test1);
console.log('test2', test2);
