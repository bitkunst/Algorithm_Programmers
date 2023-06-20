function solution(park, routes) {
    let x = 0;
    let y = 0;
    // 공원의 가로(W) 세로(H)
    const W = park[0].length;
    const H = park.length;
    // 동서남북 방향
    const direction = ['E', 'W', 'S', 'N'];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    // 시작 지점 구하기
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (park[i][j] === 'S') {
                x = j;
                y = i;
            }
        }
    }

    // 좌표 이동 로직 구현
    for (const route of routes) {
        const [dir, n] = route.split(' ');
        const idx = direction.indexOf(dir);
        let nx = x;
        let ny = y;
        let movable = true;

        // 이동
        for (let i = 0; i < n; i++) {
            nx += dx[idx];
            ny += dy[idx];

            // 범위 초과
            if (nx < 0 || nx >= W || ny < 0 || ny >= H) {
                movable = false;
                break;
            }

            // 장애물
            if (park[ny][nx] === 'X') {
                movable = false;
                break;
            }
        }

        if (movable) {
            x = nx;
            y = ny;
        }
    }

    return [y, x];
}

const test1 = solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
const test2 = solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']);
const test3 = solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
