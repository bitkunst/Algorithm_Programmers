function solution(n, lost, reserve) {
    let answer = 0;
    const mapper = {};

    // 모든 학생이 체육복을 가져왔다고 가정
    for (let i = 1; i <= n; i++) {
        mapper[i] = 1;
    }

    // 여벌이 있는 학생들은 체육복+1
    reserve.forEach((student) => (mapper[student] += 1));

    // 체육복을 도난당한 학생들은 체육복-1
    lost.forEach((student) => (mapper[student] -= 1));

    // 여벌이 있는 학생들 중 2벌 이상 있는 학생은 앞 또는 뒤 학생에게 체육복 빌려주기
    for (let i = 1; i <= n; i++) {
        if (mapper[i] >= 2 && mapper[i - 1] === 0) {
            mapper[i]--;
            mapper[i - 1]++;
        }

        if (mapper[i] >= 2 && mapper[i + 1] === 0) {
            mapper[i]--;
            mapper[i + 1]++;
        }
    }

    // 체육복이 1벌 이상인 학생들 카운팅
    Object.keys(mapper).forEach((v) => {
        if (mapper[v]) answer += 1;
    });

    return answer;
}

const test1 = solution(5, [2, 4], [1, 3, 5]);
const test2 = solution(5, [2, 4], [3]);
const test3 = solution(10, [2, 4, 6, 8, 10], [1, 7, 5, 3]);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
