function solution(arr) {
    let answer = 0;
    let sum = 0;

    // 배열 내 모든 원소들의 총합 구하기
    for (const num of arr) {
        sum += num;
    }

    // 평균 내기
    answer = sum / arr.length;

    return answer;
}

const result1 = solution([1, 2, 3, 4]);
const result2 = solution([5, 5]);
console.log('result1', result1);
console.log('result2', result2);
