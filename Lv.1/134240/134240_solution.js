function solution(food) {
    let answer = ''; // 음식 순서

    for (let i = 0; i < food.length; i++) {
        // 1. 물의 양 or 준비된 음식의 양이 적을 경우
        if (food[i] === 1) continue;

        // 2. 준비된 음식 양의 절반씩 균등하게 배치하기
        let count = Math.floor(food[i] / 2);
        while (count > 0) {
            answer += i;
            count--;
        }
    }

    // 3. 물 추가 & 두번째 선수 음식 배치하기
    const player2 = answer
        .split('')
        .map((v) => parseInt(v))
        .reverse();

    answer += '0';
    answer += player2.join('');

    return answer;
}

const test1 = solution([1, 3, 4, 6]);
const test2 = solution([1, 7, 1, 2]);

console.log('test1', test1);
console.log('test2', test2);
