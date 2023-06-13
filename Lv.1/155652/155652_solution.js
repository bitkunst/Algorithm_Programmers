function solution(s, skip, index) {
    let answer = '';
    const alphaMapping = {};

    // 1. 알파벳 데이터셋 만들기 97~122 => a~z
    for (let i = 0; i < 26; i++) {
        // ASCII 코드 97은 'a'
        alphaMapping[97 + i] = String.fromCharCode(97 + i);
    }

    // 2. 문자열 s 조회
    for (const letter of s) {
        let count = 0;
        let code = letter.charCodeAt(0);

        while (count < index) {
            code += 1;
            if (code > 122) {
                code = 96 + (code % 122);
            }
            let value = alphaMapping[code];

            if (skip.indexOf(value) === -1) count++;
        }

        answer += alphaMapping[code];
    }

    return answer;
}

function solutionWithoutASCII(s, skip, index) {
    let answer = '';
    // 1. 알파벳 배열 만들기
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // 2. skip에 포함된 알파벳 필터링
    const filteredAlpha = alphabets.filter((v) => !skip.includes(v));

    // 3. 문자열 s 순회
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        // index 만큼 이동하기
        const newIndex = (filteredAlpha.indexOf(letter) + index) % filteredAlpha.length;

        answer += filteredAlpha[newIndex];
    }

    return answer;
}

const test1 = solution('aukks', 'wbqd', 5);
const test2 = solutionWithoutASCII('aukks', 'wbqd', 5);
console.log('test1', test1);
console.log('test2', test2);
