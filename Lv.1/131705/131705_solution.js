function solution(number) {
    let answer = 0;

    // combination으로 길이 3짜리 배열 만들기
    function combine(temp, start) {
        if (temp.length === 3) {
            let sum = 0;
            temp.forEach((v) => {
                sum += v;
            });
            if (sum === 0) answer++;
            return;
        }

        for (let i = start; i < number.length; i++) {
            temp.push(number[i]);
            combine(temp, i + 1);
            temp.pop();
        }
    }

    combine([], 0);

    return answer;
}

const test1 = solution([-2, 3, 0, 2, -5]);
const test2 = solution([-3, -2, -1, 0, 1, 2, 3]);
const test3 = solution([-1, 1, -1, 1]);
console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
