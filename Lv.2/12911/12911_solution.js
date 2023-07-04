function solution(n) {
    let answer = 0;
    let addAmount = 1;

    while (true) {
        // 2진수로 변환했을 때 1의 갯수가 같다면 break
        if (compareNumberOfOne(n, addAmount)) {
            answer = n + addAmount;
            break;
        }
        addAmount++;
    }

    return answer;
}

// 2진수로 변환 후 1의 개수를 비교하는 함수
function compareNumberOfOne(n, amount) {
    const currentBinaryNum = n.toString(2);
    const nextBinaryNum = (n + amount).toString(2);

    const currentNumberOfOne = currentBinaryNum
        .split('')
        .map((v) => parseInt(v))
        .filter((v) => v === 1).length;
    const nextNumberOfOne = nextBinaryNum
        .split('')
        .map((v) => parseInt(v))
        .filter((v) => v === 1).length;

    if (currentNumberOfOne === nextNumberOfOne) return true;
    else return false;
}

const test1 = solution(78);
const test2 = solution(15);

console.log('test1', test1);
console.log('test2', test2);
