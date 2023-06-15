function solution(keymap, targets) {
    let answer = [];
    const keyMapper = {};

    // keymap을 순회하면서 최소 순서 자판 만들기
    for (const value of keymap) {
        for (const letter of value) {
            let idx = value.indexOf(letter);
            // 순서가 더 나중일 경우 skip
            if (keyMapper[letter] < idx + 1) continue;
            keyMapper[letter] = idx + 1;
        }
    }

    // targets 안의 문자열을 순회하면서 keyMapper 사용
    for (const value of targets) {
        let count = 0;
        for (const letter of value) {
            if (!keyMapper[letter]) {
                count = -1;
                break;
            }
            count += keyMapper[letter];
        }
        answer.push(count);
    }

    return answer;
}

const test1 = solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']);
const test2 = solution(['AA'], ['B']);
const test3 = solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
