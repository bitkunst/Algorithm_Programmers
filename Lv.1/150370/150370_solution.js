function solution(today, terms, privacies) {
    let answer = [];
    const termsMap = {};

    // 1. 약관 유효기간 데이터셋 만들기
    for (const value of terms) {
        const [type, month] = value.split(' ');
        termsMap[type] = month;
    }

    for (let i = 0; i < privacies.length; i++) {
        // 2. 수집된 개인정보 데이터 파싱
        const [date, type] = privacies[i].split(' ');
        const duration = termsMap[type];
        const dateArr = date.split('.');
        const [year, month, day] = getDueDate(duration, dateArr);

        // 3. 오늘 날짜와 비교
        const todayArr = today.split('.').map((v) => parseInt(v));

        if (todayArr[0] > year) {
            answer.push(i + 1);
            continue;
        }

        if (todayArr[0] === year && todayArr[1] > month) {
            answer.push(i + 1);
            continue;
        }

        if (todayArr[0] === year && todayArr[1] === month && todayArr[2] > day) {
            answer.push(i + 1);
            continue;
        }
    }

    return answer;
}

function getDueDate(duration, dateArr) {
    let year = parseInt(dateArr[0]);
    let month = parseInt(dateArr[1]) + parseInt(duration);
    let day = parseInt(dateArr[2]) - 1;

    while (month > 12) {
        month -= 12;
        year += 1;
    }

    if (day === 0) {
        month -= 1;
        if (month === 0) {
            month = 12;
            year -= 1;
        }
        day = 28;
    }

    return [year, month, day];
}

const test1 = solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
);
const test2 = solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'],
);
const test3 = solution('2020.05.15', ['A 1', 'B 18'], ['2000.12.01 A', '2019.10.15 B']);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
