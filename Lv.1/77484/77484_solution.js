function solution(lottos, win_nums) {
    let answer = [];
    let max = 0;
    let min = 0;
    let counter = 0;

    // lottos 배열 안에 당첨 번호가 있는지 조회
    lottos.forEach((num) => {
        win_nums.forEach((winNum) => {
            if (num === winNum) counter++;
        });
    });

    // 값 복사
    max = counter;
    min = counter;

    // lottos 배열 안에 있는 0의 개수가 전부 당첨이라고 가정 -> 최고 순위
    max += lottos.filter((v) => v === 0).length;

    // 최고 순위 push
    if (max < 2) max = 1;
    answer.push(7 - max);

    // lottos 배열 안에 있는 0의 개수가 전부 꽝이라고 가정 -> 최저 순위
    // 최저 순위 push
    if (min < 2) min = 1;
    answer.push(7 - min);

    return answer;
}

const test1 = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
const test2 = solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
const test3 = solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
