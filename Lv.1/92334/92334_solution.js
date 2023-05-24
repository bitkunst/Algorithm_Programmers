function solution(id_list, report, k) {
    let answer = [];
    let userMap = {};
    let reportMap = {};
    let reported = [];

    // 1. 유저 데이터셋 제작
    for (const user of id_list) {
        userMap[user] = [];
    }

    // 2. report에 있는 신고 자료 매핑
    for (const value of report) {
        const valueArr = value.split(' ');
        const from = valueArr[0];
        const to = valueArr[1];

        userMap[from].push(to);
    }

    // 3. 중복 신고 처리
    for (const user of id_list) {
        userMap[user] = [...new Set(userMap[user])];
    }

    // 4. 신고 횟수 카운팅
    for (const user in userMap) {
        userMap[user].forEach((v) => {
            reportMap[v] = (reportMap[v] || 0) + 1;
        });
    }

    // 5. 신고 횟수 초과자 처리
    for (const user in reportMap) {
        if (reportMap[user] >= k) reported.push(user);
    }

    // 6. 메일 발송
    for (const user of id_list) {
        let counter = 0;
        const userReport = userMap[user];
        reported.forEach((v) => {
            if (userReport.includes(v)) counter++;
        });

        answer.push(counter);
    }

    return answer;
}

const test1 = solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2,
);
const test2 = solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3);

console.log('test1', test1);
console.log('test2', test2);
