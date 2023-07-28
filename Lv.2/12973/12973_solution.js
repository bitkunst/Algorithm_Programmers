function solutionFailedWithTimeComplexity(s) {
    const strArr = s.split('');

    while (strArr.length > 0) {
        // 부분문자열 계산
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === strArr[i + 1]) {
                strArr.splice(i, 2);
                break;
            }

            // 일치하는 짝이 없다면
            if (i === strArr.length - 1) return 0;
        }
    }

    return 1;
}

function solution(s) {
    const stack = [s[0]];

    // 문자열 길이가 홀수일 경우 짝짓기 불가
    if (s.length % 2 === 1) return 0;

    for (let i = 1; i < s.length; i++) {
        // 짝지을 수 있는 경우 pop
        if (s[i] === stack[stack.length - 1]) stack.pop();
        else stack.push(s[i]);
    }

    if (stack.length === 0) return 1;
    else return 0;
}

const test1 = solution('baabaa');
const test2 = solution('cdcd');

console.log('test1', test1);
console.log('test2', test2);
