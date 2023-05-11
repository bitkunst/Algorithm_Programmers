function solution(n) {
    let answer = 0;
    // 3진법으로 변환 후 쪼개기
    const radixThreeArr = n.toString(3).split('');
    const reverseArr = [];

    // 뒤집기
    for (let i = radixThreeArr.length - 1; i >= 0; i--) {
        reverseArr.push(radixThreeArr[i]);
    }

    const reversedRadixThree = reverseArr.join('');

    // 10진법으로 변환
    let exp = reversedRadixThree.length - 1;
    let index = 0;

    while (exp >= 0) {
        answer += parseInt(reversedRadixThree[index]) * 3 ** exp;
        exp--;
        index++;
    }

    return answer;
}

const test1 = solution(45);
const test2 = solution(125);
console.log('test1', test1);
console.log('test2', test2);
