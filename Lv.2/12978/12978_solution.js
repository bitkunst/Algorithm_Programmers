function solution(N, road, K) {
    // N+1 크기의 인접 리스트를 생성하여 각 마을에 연결된 도로 정보를 저장
    const adj = Array.from(Array(N + 1), () => []);
    // 각 마을까지의 최단 거리를 저장하는 배열을 초기화 (무한대로 설정)
    const distances = Array(N + 1).fill(Infinity);

    // 주어진 도로 정보를 인접 리스트에 추가
    for (let [a, b, c] of road) {
        adj[a].push({ to: b, cost: c }); // a 마을에서 b 마을로 가는 도로 정보
        adj[b].push({ to: a, cost: c }); // 양방향이므로 b 마을에서 a 마을로 가는 정보도 추가
    }

    // 우선순위 큐로 사용할 배열. 시작점은 1번 마을.
    const pq = [{ vertex: 1, dist: 0 }];
    // 1번 마을 자신까지의 거리는 0
    distances[1] = 0;

    // 우선순위 큐가 빌 때까지 반복
    while (pq.length > 0) {
        // 가장 거리가 짧은 마을부터 처리하기 위해 정렬
        pq.sort((a, b) => a.dist - b.dist);
        // 가장 거리가 짧은 마을 정보 추출
        const { vertex, dist } = pq.shift();

        // 이미 처리된 마을은 스킵
        if (distances[vertex] < dist) continue;

        // 해당 마을에 연결된 도로 정보를 순회
        for (let edge of adj[vertex]) {
            const nextDist = dist + edge.cost; // 현재 마을을 거쳐서 다음 마을로 가는 거리
            // 더 짧은 경로를 발견하면 정보 업데이트
            if (nextDist < distances[edge.to]) {
                distances[edge.to] = nextDist;
                pq.push({ vertex: edge.to, dist: nextDist }); // 큐에 추가
            }
        }
    }

    // 계산된 거리 정보 중 K 이하인 거리만 카운트하여 반환
    return distances.filter((dist) => dist <= K).length;
}

const test1 = solution(
    5,
    [
        [1, 2, 1],
        [2, 3, 3],
        [5, 2, 2],
        [1, 4, 2],
        [5, 3, 1],
        [5, 4, 2],
    ],
    3,
);
const test2 = solution(
    6,
    [
        [1, 2, 1],
        [1, 3, 2],
        [2, 3, 2],
        [3, 4, 3],
        [3, 5, 2],
        [3, 5, 3],
        [5, 6, 1],
    ],
    4,
);

console.log('test1', test1);
console.log('test2', test2);
