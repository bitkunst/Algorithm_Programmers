function solution(k, score) {
    let answer = [];
    let rank = [];

    for (const value of score) {
        // 1. rank 배열에 담기
        rank.push(value);

        // 2. 내림차순으로 정렬
        rank.sort(DESC);

        // 3. 명예의 전당 인원수만 남기기
        rank.splice(k);

        // 4. 최하위 점수 넣기
        answer.push(rank[rank.length - 1]);
    }

    return answer;
}

function DESC(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

const test1 = solution(3, [10, 100, 20, 150, 1, 100, 200]);
const test2 = solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);

console.log('test1', test1);
console.log('test2', test2);
