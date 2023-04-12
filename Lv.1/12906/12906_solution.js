function solution(arr) {
    let answer = [];
    // 1. arr 안에 있는 원소들을 순회
    for (const num of arr) {
        let element = answer[answer.length - 1];
        // 2. answer 배열의 마지막 원소와 arr 배열의 원소가 일치하면 패스, 일치하지 않으면 삽입
        if (num == element) continue;
        answer.push(num);
    }

    return answer;
}

const result1 = solution([1, 1, 3, 3, 0, 1, 1]);
const result2 = solution([4, 4, 4, 3, 3]);
console.log('result1', result1);
console.log('result2', result2);

//* Using Pointers
function findUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    const answer = arr.slice(0, i + 1);

    return answer;
}
