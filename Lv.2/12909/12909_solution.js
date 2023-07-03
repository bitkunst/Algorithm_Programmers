function solution(s) {
    let answer = true;
    const stack = [];

    // 시간 초과 방지..?
    if (s[0] === ')') return false;

    // '('이면 stack에 삽입
    // ')'일 경우 stack의 마지막 요소 pop()
    for (let i = 0; i < s.length; i++) {
        const lastIndex = stack.length - 1;
        if (stack[lastIndex] === '(' && s[i] === ')') {
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }

    if (stack.length !== 0) answer = false;

    return answer;
}

const test1 = solution('()()');
const test2 = solution('(())()');
const test3 = solution(')()(');
const test4 = solution('(()(');

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
