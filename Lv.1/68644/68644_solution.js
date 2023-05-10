function solution(numbers) {
    const answer = [];
    const combinations = getCombinations(numbers, 2);

    for (const numSet of combinations) {
        let sum = 0;
        numSet.forEach((v) => (sum += v));

        if (isExist(answer, sum)) {
            continue;
        } else {
            answer.push(sum);
        }
    }

    answer.sort(asc);

    return answer;
}

// 오름차순 정렬
function asc(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// combination 구하기
function getCombinations(arr, n) {
    let results = [];

    function combine(temp, start) {
        if (temp.length === n) {
            results.push(Array.from(temp));
            return;
        }

        for (let i = start; i < arr.length; i++) {
            temp.push(arr[i]);
            combine(temp, i + 1);
            temp.pop();
        }
    }

    combine([], 0);

    return results;
}

function isExist(arr, num) {
    let result = false;
    if (arr.indexOf(num) !== -1) result = true;

    return result;
}

const test1 = solution([2, 1, 3, 4, 1]);
const test2 = solution([5, 0, 2, 7]);
console.log('test1', test1);
console.log('test2', test2);
