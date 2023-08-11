function solution(n, words) {
    const answer = [0, 0];

    for (let i = 1; i < words.length; i++) {
        // 이전 단어의 마지막 글자와 현재 단어의 첫 글자 일치 여부 확인
        const prevWord = words[i - 1];
        const currWord = words[i];
        const idx = words.slice(0, i).indexOf(currWord);

        // 끝말을 잇지 못한 경우 || 이미 사용된 단어인 경우
        if (prevWord[prevWord.length - 1] !== currWord[0] || idx !== -1) {
            // 탈락한 사람 번호
            answer[0] = (i % n) + 1;
            // 탈락한 사람 차례
            answer[1] = Math.floor(i / n) + 1;

            break;
        }
    }

    return answer;
}

const test1 = solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']);
const test2 = solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
]);
const test3 = solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
