function solution(land) {
    let answer = 0;

    // 다이나믹 프로그래밍 활용
    for (let i = 1; i < land.length; i++) {
        // 현재 행의 원소들에 자기 자식의 인덱스를 제외한 이전 행의 원소들 중 최대값을 더해나간다.
        for (let j = 0; j < 4; j++) {
            // 이전 행에서 현재 행의 인덱스에 해당하는 값을 제거한 prevLand
            const prevLand = land[i - 1].slice(0, j).concat(land[i - 1].slice(j + 1, 4));
            const prevMax = Math.max(...prevLand);
            land[i][j] += prevMax;
        }
    }

    // 최대값들을 누적해서 더해왔으므로 마지막 행의 최대값 구하기
    answer = Math.max(...land[land.length - 1]);

    return answer;
}

const test1 = solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
]);
const test2 = solution([
    [1, 2, 5, 3], // 5
    [5, 6, 7, 8], // 8
    [1, 3, 2, 4], // 3
    [5, 1, 5, 1], // 5
    [9, 8, 6, 5], // 9
]);
console.log('test1', test1); // 16
console.log('test2', test2); // 30
