function solution(X, Y) {
    let answer = '';
    let result = '';

    // 1. 정수 Y 구성 빈도수;
    const frequencyY = {};

    for (const value of Y) {
        frequencyY[value] = (frequencyY[value] || 0) + 1;
    }

    // 2. 짝꿍이 있다면
    for (const value of X) {
        if (!frequencyY[value]) continue;

        frequencyY[value]--;
        result += value;
    }

    // * 짝꿍이 없다면
    if (result === '') {
        return '-1';
    }

    // * 짝꿍이 전부 0 이라면
    if (parseInt(result) === 0) {
        return '0';
    }

    // 3. 내림차순 정렬
    const temp = [...result].sort(DESC);

    // 문자열 합치기
    answer = temp.join('');

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

const test1 = solution('100', '2345');
const test2 = solution('100', '203045');
const test3 = solution('100', '123450');
const test4 = solution('12321', '42531');
const test5 = solution('5525', '1255');

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
console.log('test5', test5);
