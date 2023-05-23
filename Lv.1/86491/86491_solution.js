function solution(sizes) {
    let answer = 0;
    let maxWidth = 0;
    let maxHeight = 0;

    // 가로는 긴 쪽, 세로는 짧은 쪽
    for (const size of sizes) {
        if (size[0] < size[1]) {
            let temp = size[0];
            size[0] = size[1];
            size[1] = temp;
        }
    }

    // 가로 최대, 세로 최대 구하기
    for (const size of sizes) {
        if (size[0] > maxWidth) maxWidth = size[0];
        if (size[1] > maxHeight) maxHeight = size[1];
    }

    answer = maxWidth * maxHeight;

    return answer;
}

const test1 = solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
]);
const test2 = solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
]);
const test3 = solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
]);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
