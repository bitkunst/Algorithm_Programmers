function solution(arr1, arr2) {
    let answer = [];

    while (arr1.length > 0) {
        // matrix에서 요소 뽑아내기
        let element1 = arr1.shift();
        let element2 = arr2.shift();
        let result = [];

        // 덧셉 연산 수행
        for (let i = 0; i < element1.length; i++) {
            const add = element1[i] + element2[i];
            result.push(add);
        }

        answer.push(result);
    }

    return answer;
}

const result1 = solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ],
);
const result2 = solution([[1], [2]], [[3], [4]]);

console.log('result1', result1);
console.log('result2', result2);
