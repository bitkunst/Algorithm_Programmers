function solution(s) {
    let answer = 0;
    let stack1 = [];
    let stack2 = [];

    // 1. 문자열 전체 순회
    for (let i = 0; i < s.length; i++) {
        // 2. stack1이 비어있을 경우
        if (stack1.length === 0) {
            stack1.push(s[i]);
            continue;
        }

        // 3. stack1과 비교, 문자열 일치 여부 확인
        if (stack1[stack1.length - 1] === s[i]) {
            stack1.push(s[i]);
        } else {
            stack2.push(s[i]);
        }

        // 4. stack1 과 stack2의 길이가 같다면
        if (stack1.length === stack2.length) {
            answer++;
            stack1 = [];
            stack2 = [];
        }
    }

    // 5. 만약 stack1 과 stack2가 비워지지 않았다면
    if (stack1.length !== 0 || stack2.length !== 0) {
        answer++;
    }

    return answer;
}

const test1 = solution('banana');
const test2 = solution('abracadabra');
const test3 = solution('aaabbaccccabba');
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
