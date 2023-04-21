function solution(arr) {
    let answer = [];
    let tempArr = [];

    // 0. 참조 문제 해결
    for (num of arr) {
        tempArr.push(num);
    }

    // 1. tempArr 배열 내림차순 정렬
    tempArr.sort(compare);

    // 2. 가장 작은 수 색출
    const min = tempArr.pop();

    // 3. min 값 제외하기
    for (num of arr) {
        if (num === min) continue;
        answer.push(num);
    }

    // 4. 빈 배열일 경우 -1을 채워 return
    if (answer.length === 0) answer.push(-1);

    return answer;
}

function solution2(arr) {
    let answer = [];
    let min = arr[0];

    // 1. min 값 색출
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    // 2. min 값 제외
    for (const num of arr) {
        if (num === min) continue;
        answer.push(num);
    }

    // 3. 빈 배열 케이스 처리
    if (answer.length === 0) answer.push(-1);

    return answer;
}

// 내림차순 정렬 함수
function compare(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

const result = solution2([6, 3, 7, 1, 8, 2, 4]);
console.log('result', result);
