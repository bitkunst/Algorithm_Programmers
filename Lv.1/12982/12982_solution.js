function solution(d, budget) {
    let answer = 0;
    let sum = 0;

    // 최대한 많은 부서에 물품 지원을 해주는 것이 목적이므로
    // 오름차순으로 sorting
    d.sort(asc);

    // budget을 넘지 않는 선에서 최대값 구하기
    for (const amount of d) {
        sum += amount;
        if (sum > budget) break;
        answer++;
    }

    return answer;
}

function asc(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const test1 = solution([1, 3, 2, 5, 4], 9);
const test2 = solution([2, 2, 3, 3], 10);
console.log('test1', test1);
console.log('test2', test2);
