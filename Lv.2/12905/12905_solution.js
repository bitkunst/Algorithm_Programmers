function solution(board) {
    let answer = 0;
    let row = board.length;
    let col = board[0].length;
    // 좌표이동 : [왼쪽, 위, 좌측상단]
    const dx = [-1, 0, -1];
    const dy = [0, -1, -1];

    // 행 또는 열이 1인 경우
    if (row < 2 || col < 2) return 1;

    // board 이동
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            // 현재값이 0일 경우 skip
            if (board[i][j] === 0) continue;

            let nx, ny;
            const temp = [];
            // 왼쪽, 위, 좌측상단 이동
            for (let k = 0; k < 3; k++) {
                nx = j + dx[k];
                ny = i + dy[k];

                temp.push(board[ny][nx]);
            }

            // 현재값에 temp 배열 안의 최소값 더하기
            board[i][j] += Math.min(...temp);

            answer = answer < board[i][j] ? board[i][j] : answer;
        }
    }
    return answer ** 2;
}

const test1 = solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
]);
const test2 = solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
]);
const test3 = solution([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
]);
const test4 = solution([
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
]);
const test5 = solution([
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0],
]);
const test6 = solution([0, 1, 0]);
const test7 = solution([[0], [1], [1, 1]]);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
console.log('test5', test5);
console.log('test6', test6);
console.log('test7', test7);
