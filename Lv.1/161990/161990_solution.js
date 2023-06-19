function solution(wallpaper) {
    let answer = [];
    let startStack = [];
    let endY = 0;
    let endX = 0;

    // wallpaper 순회
    for (let i = 0; i < wallpaper.length; i++) {
        const content = wallpaper[i];
        // 바탕화면 파일 위치 탐색
        for (let j = 0; j < content.length; j++) {
            if (content[j] === '#') {
                startStack.push([i, j]);
            }

            // 시작 위치 바꾸기
            if (content[j] === '#' && startStack[0][0] > i) {
                startStack[0][0] = i;
            }
            if (content[j] === '#' && startStack[0][1] > j) {
                startStack[0][1] = j;
            }

            // 마지막 위치 넣기
            if (j === content.length - 1 && startStack.length !== 0) {
                const [y, x] = startStack[startStack.length - 1];
                endY = endY < y + 1 ? y + 1 : endY;
                endX = endX < x + 1 ? x + 1 : endX;
            }
        }
    }

    answer = [...startStack[0], endY, endX];
    return answer;
}

const test1 = solution(['.#...', '..#..', '...#.']);
const test2 = solution(['..........', '.....#....', '......##..', '...##.....', '....#.....']);
const test3 = solution(['.##...##.', '#..#.#..#', '#...#...#', '.#.....#.', '..#...#..', '...#.#...', '....#....']);
const test4 = solution(['..', '#.']);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
