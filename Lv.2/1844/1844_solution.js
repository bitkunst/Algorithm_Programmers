function solution(maps) {
    let answer = -1;
    // 골인 지점
    const goalX = maps[0].length - 1;
    const goalY = maps.length - 1;
    // 좌표 이동 데이터
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = [];
    // 시작점(0,0), move
    queue.push([0, 0, 1]);

    while (queue.length !== 0) {
        const [curX, curY, move] = queue.shift();

        if (curX === goalX && curY === goalY) return move;

        for (let i = 0; i < 4; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];

            // bfs
            if (nx >= 0 && nx <= goalX && ny >= 0 && ny <= goalY && maps[ny][nx] === 1) {
                queue.push([nx, ny, move + 1]); // 큐에 삽입
                maps[ny][nx] = 0; // 지나온 길 체크
            }
        }
    }
    return answer;
}

const test1 = solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]);
const test2 = solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
]);

console.log('test1', test1);
console.log('test2', test2);
