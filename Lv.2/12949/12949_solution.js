function solution(arr1, arr2) {
    const answer = [];
    let arr1Row = arr1.length;
    let arr1Col = arr1[0].length;
    let arr2Col = arr2[0].length;

    for (let i = 0; i < arr1Row; i++) {
        const newRow = [];
        for (let j = 0; j < arr2Col; j++) {
            let sum = 0;
            for (let k = 0; k < arr1Col; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            newRow.push(sum);
        }
        answer.push(newRow);
    }

    return answer;
}

const test1 = solution(
    [
        [1, 4],
        [3, 2],
        [4, 1],
    ],
    [
        [3, 3],
        [3, 3],
    ],
);
const test2 = solution(
    [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4],
    ],
    [
        [5, 4, 3],
        [2, 4, 1],
        [3, 1, 1],
    ],
);

console.log('test1', test1);
console.log('test2', test2);
