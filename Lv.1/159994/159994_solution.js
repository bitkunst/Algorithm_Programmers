function solution(cards1, cards2, goal) {
    let answer = 'Yes';

    // 1. goal 순회
    for (const word of goal) {
        if (cards1[0] === word) {
            // cards1에 있을 경우
            cards1.shift();
        } else if (cards2[0] === word) {
            // cards2에 있을 경우
            cards2.shift();
        } else {
            // cards1, cards2 모두 없는 경우
            answer = 'No';
            return answer;
        }
    }

    return answer;
}

const test1 = solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']);
const test2 = solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']);
console.log('test1', test1);
console.log('test2', test2);
