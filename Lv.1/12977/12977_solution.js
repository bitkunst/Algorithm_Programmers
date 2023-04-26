function solution(nums) {
    let answer = 0;
    // 서로 다른 3개의 숫자를 조합할 수 있는 포인터
    let pointer1 = 0;
    let pointer2 = 1;
    let pointer3 = 2;

    // nums 배열 순회
    // pointer1의 순회가 완료되면 break
    while (pointer1 < nums.length - 2) {
        // 합이 소수가 되는 경우 찾기
        const sum = nums[pointer1] + nums[pointer2] + nums[pointer3];
        if (isPrime(sum)) {
            answer++;
        }

        // pointer2 순회 완료시 처리
        if (pointer2 === nums.length - 2) {
            pointer1++;
            pointer2 = pointer1 + 1;
            pointer3 = pointer1 + 2;
            continue;
        }

        // pointer3 순회 완료시 처리
        if (pointer3 === nums.length - 1) {
            pointer2++;
            pointer3 = pointer2 + 1;
            continue;
        }

        pointer3++;
    }

    return answer;
}

// 소수 판별 함수
function isPrime(n) {
    let result = false;
    let divisorCounter = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisorCounter++;
    }

    if (divisorCounter === 2) result = true;

    return result;
}

const test1 = solution([1, 2, 3, 4]);
const test2 = solution([1, 2, 7, 6, 4]);
console.log('test1', test1);
console.log('test2', test2);
