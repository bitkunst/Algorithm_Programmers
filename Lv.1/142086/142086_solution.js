function solution(s) {
    let answer = [];

    // 1. 문자열 거꾸로 순회하면서 가까운 같은 글자 찾기
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 1; j <= s.length; j++) {
            if (s[i] === s[i - j]) {
                answer.push(j);
                break;
            }
            if (i - j <= 0) {
                answer.push(-1);
                break;
            }
        }
    }

    // 2. 역순으로 뒤집기
    answer.reverse();

    return answer;
}

const test1 = solution('banana');
const test2 = solution('foobar');
const test3 = solution('abcda'); // [-1, -1, -1, -1, 4]
const test4 = solution('s');
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
