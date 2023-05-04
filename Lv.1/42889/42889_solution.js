function solution(N, stages) {
    let answer = [];
    let playerPerStage = {};
    let failurePerStage = {};

    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 1의 실패율 = stages 배열에서 1인 원소의 수 / stages 배열에서 1 이상인 원소의 수
    // stage별 플레이어 수 매핑
    for (let i = 1; i < N + 1; i++) {
        playerPerStage[i] = stages.filter((v) => v === i).length;
    }

    for (const stage in playerPerStage) {
        let arrive = 0;
        for (const value of stages) {
            if (value >= parseInt(stage)) arrive++;
        }

        if (arrive === 0) failurePerStage[stage] = 0;
        else failurePerStage[stage] = playerPerStage[stage] / arrive;
    }

    const resultArr = Object.entries(failurePerStage).sort(sortMethod);
    console.log('resultArr', resultArr);

    for (const result of resultArr) {
        answer.push(parseInt(result[0]));
    }

    return answer;
}

function sortMethod(a, b) {
    if (a[1] < b[1]) {
        return 1;
    } else if (a[1] > b[1]) {
        return -1;
    } else {
        const result = asc(a[0], b[0]);
        return result;
    }
}

function asc(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const test1 = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
const test2 = solution(4, [4, 4, 4, 4, 5]);
const test3 = solution(5, [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5]);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
