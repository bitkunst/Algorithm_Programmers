function solution(survey, choices) {
    let answer = '';
    let choicePointer = 0;
    const choiceMap = {};
    const cases = [
        ['R', 'T'],
        ['C', 'F'],
        ['J', 'M'],
        ['A', 'N'],
    ];

    // 1. 검사지 순회 및 점수 계산
    for (const value of survey) {
        const arr = value.split('');
        const choice = choices[choicePointer];
        if (choice < 4) {
            choiceMap[arr[0]] = (choiceMap[arr[0]] || 0) + (4 - choice);
        }
        if (choice > 4) {
            choiceMap[arr[1]] = (choiceMap[arr[1]] || 0) + (choice - 4);
        }
        choicePointer++;
    }

    // 2. 지표 계산
    for (const item of cases) {
        choiceMap[item[0]] = choiceMap[item[0]] ?? 0;
        choiceMap[item[1]] = choiceMap[item[1]] ?? 0;
        if (choiceMap[item[0]] > choiceMap[item[1]]) {
            answer += item[0];
        } else if (choiceMap[item[0]] < choiceMap[item[1]]) {
            answer += item[1];
        } else {
            answer += item[0];
        }
    }

    return answer;
}

const test1 = solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]);
const test2 = solution(['TR', 'RT', 'TR'], [7, 1, 3]);

console.log('test1', test1);
console.log('test2', test2);
