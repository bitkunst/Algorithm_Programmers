function solution(a, b) {
    let answer = '';
    let sum = 0;
    const dayMapper = {
        0: 'THU',
        1: 'FRI',
        2: 'SAT',
        3: 'SUN',
        4: 'MON',
        5: 'TUE',
        6: 'WED',
    };
    const monthDateMapper = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    };

    for (let month in monthDateMapper) {
        if (month == a) {
            sum += b;
            break;
        }
        sum += monthDateMapper[month];
    }
    answer = dayMapper[sum % 7];
    return answer;
}

// test
const result = solution(5, 24);
console.log('result', result);
