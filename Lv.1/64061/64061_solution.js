/*
00000
00000
00500
02402
05151

[4,3,1,1,3,2,4]

*/

function solution(board, moves) {
    let answer = 0;
    let totalMoves = moves.length;
    let movePointer = 0;
    const basket = []; // 뽑은 인형이 담길 바구니

    while (movePointer < totalMoves) {
        const move = moves[movePointer] - 1;

        for (const row of board) {
            if (row[move] === 0) continue;

            const latest = basket[basket.length - 1];
            // basket 스택에 담긴 최신 인형과 비교 후 삭제 or 삽입
            if (latest === row[move]) {
                basket.pop();
                row[move] = 0;
                answer += 2;
                break;
            } else {
                basket.push(row[move]);
                row[move] = 0;
                break;
            }
        }
        movePointer++;
    }

    return answer;
}

const test = solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
);
console.log('test', test);
