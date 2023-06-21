function solution(name, yearning, photo) {
    let answer = [];
    const yearningMap = {};

    // 사람별 그리움 점수 객체
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }

    // photo 순회하면서 점수 계산
    for (const item of photo) {
        let score = 0;
        for (const person of item) {
            if (!yearningMap[person]) continue;
            score += yearningMap[person];
        }

        answer.push(score);
    }

    return answer;
}

const test1 = solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
        ['may', 'kein', 'kain', 'radi'],
        ['may', 'kein', 'brin', 'deny'],
        ['kon', 'kain', 'may', 'coni'],
    ],
);
const test2 = solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
        ['kali', 'mari', 'don'],
        ['pony', 'tom', 'teddy'],
        ['con', 'mona', 'don'],
    ],
);
const test3 = solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
