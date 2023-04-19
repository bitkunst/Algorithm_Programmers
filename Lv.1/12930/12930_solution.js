// Time Complexity : O(N^2)
function solution1(s) {
    let answer = '';
    const newStringArr = [];
    // 1. 문자열을 공백 기준으로 split
    const stringArr = s.split(' ');

    // 2. stringArr 배열 안의 단어들을 순회
    for (const str of stringArr) {
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) newStr += str[i].toUpperCase();
            else newStr += str[i].toLowerCase();
        }

        newStringArr.push(newStr);
    }

    answer = newStringArr.join(' ');

    return answer;
}

// Time Complexity: O(N)
function solution2(s) {
    let answer = '';
    let pointer = 0;

    // 문자열 s 순회하기
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            pointer = 0;
            continue;
        }

        if (pointer % 2 === 0) answer += s[i].toUpperCase();
        else answer += s[i].toLowerCase();

        pointer++;
    }

    return answer;
}

const result = solution2('try hello world');
console.log('result', result);
