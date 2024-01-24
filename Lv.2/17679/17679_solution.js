function solution(m, n, board) {
    board = board.map((v) => v.split(''));
    let answer = 0;
    while (true) {
        const count = countBlock(m, n, board);
        if (count === 0) break;
        answer += count;
    }

    return answer;
}

function countBlock(m, n, board) {
    const check = Array(m)
        .fill()
        .map(() => Array(n).fill(0));

    let count = 0;

    // 2x2  블록 찾기
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            let block = board[i][j];
            if (
                block !== '0' &&
                block === board[i][j + 1] &&
                block === board[i + 1][j] &&
                block === board[i + 1][j + 1]
            ) {
                check[i][j] = 1;
                check[i][j + 1] = 1;
                check[i + 1][j] = 1;
                check[i + 1][j + 1] = 1;
            }
        }
    }

    // 개수 세기 && 판 수정
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (check[i][j] === 1) {
                count++;
                board[i][j] = '0';
            }
        }
    }

    // 지워질 블록이 없다면 return
    if (count === 0) return 0;

    // CCBDE
    // 000DE
    // 000BF
    // CCBBF

    // 블록 떨어뜨리기 (밑에서 두번째부터 시작)
    for (let i = m - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            let k = i;
            while (k + 1 >= 0 && k + 1 < m && board[k + 1][j] === '0') {
                k += 1;
            }
            if (k !== i) {
                board[k][j] = board[i][j];
                board[i][j] = '0';
            }
        }
    }

    return count;
}

const test1 = solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
const test2 = solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']);

console.log(test1); // 14
console.log(test2); // 15
