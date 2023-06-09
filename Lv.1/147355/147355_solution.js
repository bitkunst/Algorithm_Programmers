function solution(t, p) {
    let answer = 0;

    // 문자열 t 순회하면서 부분문자열 길이에 해당하는 숫자 비교
    for (let i = 0; i <= t.length - p.length; i++) {
        const sub = t.slice(i, i + p.length);
        if (parseInt(sub) > parseInt(p)) continue;
        answer++;
    }
    return answer;
}

const test1 = solution('3141592', '271');
const test2 = solution('500220839878', '7');
const test3 = solution('10203', '15');

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
