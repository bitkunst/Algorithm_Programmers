function solution(n) {
    function division(n, battery) {
        // 위치가 1일 경우 반드시 1칸 이동
        if (n === 1) return battery + 1;

        if (n % 2 === 0) {
            // 거리가 짝수일 경우 순간 이동
            return division(n / 2, battery);
        } else {
            // 거리가 홀수일 경우 1만큼 이동한 후 순간 이동
            return division((n - 1) / 2, battery + 1);
        }
    }

    return division(n, 0);
}

const test1 = solution(5);
const test2 = solution(6);
const test3 = solution(5000);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
