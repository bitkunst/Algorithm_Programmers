function solution(n) {
    let answer = 0;

    // 1. 정수 n을 쪼개서 배열로 만들기
    const numArr = n
        .toString()
        .split('')
        .map((v) => parseInt(v));

    // 2. 내림차순으로 정렬
    numArr.sort(compare);

    // 3. join 후 정수로 만들기
    const numStr = numArr.join('');
    answer = parseInt(numStr);

    return answer;
}

// 내림차순 compare 함수
function compare(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

const result = solution(118372);
console.log('result', result);
