function solution(k, m, score) {
    let answer = 0;
    let appleBoxList = [];
    let appleBox = [];

    // 1. 사과 점수 내림차순으로 정렬
    score.sort(DESC);

    // 2. 사과 상자 만들기
    for (const value of score) {
        appleBox.push(value);

        if (appleBox.length === m) {
            appleBoxList.push(appleBox);
            appleBox = [];
        }
    }

    // 3. 사과 상자 별 가격 계산
    for (const box of appleBoxList) {
        const min = box.pop();
        answer += min * m;
    }

    return answer;
}

function DESC(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

const test1 = solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
const test2 = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
console.log('test1', test1);
console.log('test2', test2);
