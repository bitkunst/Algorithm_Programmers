function solution(dartResult) {
    let answer = 0;
    let scoreStack = [];

    // 점수가 10인 경우 예외 처리 필요
    const newDartResult = dartResult.replace(/10/g, 'A'); // A로 치환

    // newDartResult 순회
    for (const result of newDartResult) {
        if (!isNaN(parseInt(result)) || result === 'A') {
            let score = result === 'A' ? 10 : parseInt(result);
            scoreStack.push(score);
        }

        if (getBonus(result)) {
            let score = scoreStack.pop() ** getBonus(result);
            scoreStack.push(score);
        }

        if (getOption(result) === 2) {
            let scoreNow = scoreStack.pop();
            let scoreBefore = scoreStack.pop();
            scoreNow *= 2;
            scoreBefore = scoreBefore ? scoreBefore * 2 : 0;

            scoreStack.push(scoreBefore);
            scoreStack.push(scoreNow);
        }

        if (getOption(result) === -1) {
            let score = scoreStack.pop() * -1;
            scoreStack.push(score);
        }
    }

    // scoreStack 연산
    for (const score of scoreStack) {
        answer += score;
    }

    return answer;
}

function getBonus(type) {
    if (type === 'S') return 1;
    else if (type === 'D') return 2;
    else if (type === 'T') return 3;
    else return 0;
}

function getOption(type) {
    if (type === '*') return 2;
    else if (type === '#') return -1;
    else return 0;
}

const test1 = solution('1S*2T*3S');
const test2 = solution('1D#2S*3S');
const test3 = solution('1T2D3D#	');
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
