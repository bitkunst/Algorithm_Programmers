function solution(s) {
    // 문자열 배열 만들기
    const strArr = s.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].toLowerCase();
        for (let j = 0; j < strArr[i].length; j++) {
            // 공백문자가 연속해서 나올 경우에 대한 처리
            if (strArr[i][j] === ' ') continue;
            else {
                strArr[i] = strArr[i][j].toUpperCase() + strArr[i].slice(j + 1);
                break;
            }
        }
    }

    return strArr.join(' ');
}

const test1 = solution('3people unFollowed me');
const test2 = solution('for the last week');

console.log('test1', test1);
console.log('test2', test2);
