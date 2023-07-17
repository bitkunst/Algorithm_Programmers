function solution(A, B) {
    let answer = 0;

    // 각각의 배열을 오름차순과 내림차순으로 정렬
    A.sort(ascending);
    B.sort(descending);

    // 각각의 배열에서 i번째 원소끼리 곱하여 더하기
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}

function ascending(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function descending(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

const test1 = solution([1, 4, 2], [5, 4, 4]);
const test2 = solution([1, 2], [3, 4]);

console.log('test1', test1);
console.log('test2', test2);
