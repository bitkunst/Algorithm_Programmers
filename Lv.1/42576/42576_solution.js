function solution(participant, completion) {
    let answer = '';

    // frequencyCounter 만들기
    let frequencyCounter = {};
    for (const player of participant) {
        frequencyCounter[player] = (frequencyCounter[player] || 0) + 1;
    }

    // 완주한 선수 제거
    for (const completePlayer of completion) {
        frequencyCounter[completePlayer] -= 1;
    }

    // 남아있는 선수 가져오기
    for (const player in frequencyCounter) {
        if (frequencyCounter[player]) answer += player;
    }

    return answer;
}

const test1 = solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);
const test2 = solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']);
const test3 = solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
