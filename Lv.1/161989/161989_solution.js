function solution(n, m, section) {
    let answer = 0;
    const wall = new Array(n).fill(1);

    // section 제외하기
    for (const num of section) {
        wall[num - 1] = 0;
    }

    // wall 순회하면서 덧칠하기
    for (let i = 0; i < wall.length; i++) {
        if (wall[i] !== 0) continue;
        for (let j = 0; j < m; j++) {
            wall[i + j] = 1;
        }
        answer += 1;
    }

    return answer;
}
