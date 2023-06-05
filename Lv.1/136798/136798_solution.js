function solution(number, limit, power) {
    let answer = 0;
    const weapons = []; // 기사단원별 무기 배열

    // 1. 각 기사단원이 가질 무기 지급
    for (let i = 0; i < number; i++) {
        const weapon = findWeapon(i + 1, limit, power);
        weapons.push(weapon);
    }

    // 2. 필요한 철의 무게 계산
    weapons.forEach((v) => (answer += v));

    return answer;
}

function findWeapon(num, limit, power) {
    let divisorCount = 0;
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) divisorCount++;
        else if (num % i === 0) divisorCount += 2;
        // 제한수치를 초과했을 때 미리 정해놓은 power가 무기가 된다.
        if (divisorCount > limit) {
            return power;
        }
    }
    return divisorCount;
}

const test1 = solution(5, 3, 2);
const test2 = solution(10, 3, 2);
console.log('test1', test1);
console.log('test2', test2);
