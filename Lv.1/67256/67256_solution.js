function solution(numbers, hand) {
    let answer = '';

    // 키패드 배열 생성
    const columnMatrix = [
        [1, 4, 7, '*'],
        [2, 5, 8, 0],
        [3, 6, 9, '#'],
    ];
    // 시작 지점 좌표화
    let left = [0, 3]; // [left_x, left_y]
    let right = [2, 3]; // [right_x, right_y]

    for (const num of numbers) {
        if (isLeft(num)) {
            left = findIndex(num, columnMatrix);
            answer += 'L';
        } else if (isRight(num)) {
            right = findIndex(num, columnMatrix);
            answer += 'R';
        } else {
            const indexArr = findIndex(num, columnMatrix);
            const result = calculate(left, right, indexArr, hand);
            result === 'L' ? (left = indexArr) : (right = indexArr);
            answer += result;
        }
    }

    return answer;
}

function calculate(left, right, indexArr, hand) {
    const [index_x, index_y] = indexArr;
    const dLeft = Math.abs(left[0] - index_x) + Math.abs(left[1] - index_y);
    const dRight = Math.abs(right[0] - index_x) + Math.abs(right[1] - index_y);
    let movingHand = '';

    if (dLeft > dRight) {
        right = indexArr;
        movingHand = 'R';
    } else if (dLeft < dRight) {
        left = indexArr;
        movingHand = 'L';
    } else {
        movingHand = hand === 'right' ? 'R' : 'L';
    }

    return movingHand;
}

function findIndex(num, matrix) {
    let index_x = 0;
    let index_y = 0;
    matrix.forEach((v, k) => {
        if (v.indexOf(num) !== -1) {
            index_x = k;
            index_y = v.indexOf(num);
        }
    });

    return [index_x, index_y];
}

function isLeft(num) {
    let result = false;
    if (num === 1 || num === 4 || num === 7) result = true;

    return result;
}

function isRight(num) {
    let result = false;
    if (num === 3 || num === 6 || num === 9) result = true;

    return result;
}

const test1 = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
const test2 = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
const test3 = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
