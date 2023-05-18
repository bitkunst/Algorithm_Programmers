function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (countDivisor(i) % 2 === 0) answer += i;
        else answer -= i;
    }

    return answer;
}

function countDivisor(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) count++;
    }

    return count;
}

const test1 = solution(13, 17);
const test2 = solution(24, 27);
console.log('test1', test1);
console.log('test2', test2);

function solution2(left, right) {
    let answer = 0;

    function helper(num) {
        if (num > right) return;
        let count = 0;

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }

        if (count % 2 === 0) answer += num;
        else answer -= num;

        helper(num + 1);
    }

    helper(left);

    return answer;
}

const test3 = solution2(13, 17);
const test4 = solution2(24, 27);
console.log('test3', test3);
console.log('test4', test4);
