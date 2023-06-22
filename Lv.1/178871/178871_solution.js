function solution(players, callings) {
    let answer = [];

    // 데이터셋 만들기
    const playerToRank = new Map();
    const rankToPlayer = new Map();

    for (let i = 0; i < players.length; i++) {
        playerToRank.set(players[i], i);
        rankToPlayer.set(i, players[i]);
    }

    // 위치 변경하기
    for (const name of callings) {
        const rank = playerToRank.get(name);
        const player = rankToPlayer.get(rank);

        const frontPlayer = rankToPlayer.get(rank - 1);

        // swap
        playerToRank.set(name, rank - 1);
        playerToRank.set(frontPlayer, rank);

        rankToPlayer.set(rank, frontPlayer);
        rankToPlayer.set(rank - 1, player);
    }

    for (const val of rankToPlayer.values()) {
        answer.push(val);
    }

    return answer;
}

const test = solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']);
console.log('test', test);
