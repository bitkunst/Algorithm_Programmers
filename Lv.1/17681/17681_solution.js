function solution(n, arr1, arr2) {
    let answer = [];
    let binaryArr1 = [];
    let binaryArr2 = [];

    // arr1 배열의 숫자들을 이진수로 변환
    for (const num of arr1) {
        binaryArr1.push(toBinaryString(n, num));
    }
    // arr2 배열의 숫자들을 이진수로 변환
    for (const num of arr2) {
        binaryArr2.push(toBinaryString(n, num));
    }

    let pointer1 = 0;
    let pointer2 = 0;
    let subPointer1 = 0;
    let subPointer2 = 0;

    while (pointer1 < n) {
        let mapData = '';
        subPointer1 = 0;
        subPointer2 = 0;
        while (subPointer1 < n) {
            if (binaryArr1[pointer1][subPointer1] === '0' && binaryArr2[pointer2][subPointer2] === '0') mapData += ' ';
            else mapData += '#';

            subPointer1++;
            subPointer2++;
        }

        answer.push(mapData);
        pointer1++;
        pointer2++;
    }

    return answer;
}

// 길이가 n인 이진수로 변환
function toBinaryString(n, decimal) {
    const binaryArr = [];

    while (n > 0) {
        binaryArr.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
        n--;
    }

    const binary = binaryArr
        .reverse()
        .map((v) => v.toString())
        .join('');

    return binary;
}

const test1 = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
const test2 = solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);

console.log('test1', test1);
console.log('test2', test2);
