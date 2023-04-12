function solution(arr, divisor) {
    let answer = [];

    // arr 순회 하면서 divisor로 원소들 나누기
    for (const num of arr) {
        // 나누어 떨어진다면 answer 배열에 삽입
        if (num % divisor == 0) answer.push(num);
    }

    // answer 배열에 element가 하나도 없다면 -1 담기
    if (answer.length == 0) answer.push(-1);

    // 오름차순으로 sort 하기
    answer.sort(compare);
    return answer;
}

function compare(a, b) {
    return a - b;
}

const result1 = solution([5, 9, 7, 10], 5);
const result2 = solution([3, 2, 6], 10);
console.log('result1', result1);
console.log('result2', result2);
