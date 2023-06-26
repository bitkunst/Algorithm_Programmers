// 큐 자료구조
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    // 큐에 원소 삽입
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    // 큐에서 원소 꺼내기
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

// BFS 메소드 정의
function bfs(graph, start, visited) {
    const queue = new Queue();
    queue.enqueue(start);
    // 현재 노드를 방문 처리
    visited[start] = true;
    // 큐가 빌 때까지 반복
    while (queue.getLength() !== 0) {
        // 큐에서 하나의 원소를 뽑아 출력하기
        const v = queue.dequeue();
        console.log(v);
        // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
        for (const i of graph[v]) {
            if (!visited[i]) {
                queue.enqueue(i);
                visited[i] = true;
            }
        }
    }
}

// 각 노드가 연결된 정보를 표현
const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

// 각 노드가 방문된 정보를 표현
const visited = Array(9).fill(false);

// 정의된 BFS 함수 호출
bfs(graph, 1, visited);
