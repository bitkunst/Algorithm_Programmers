// recursion을 활용한 combination
function getCombinations(arr, n) {
    const results = [];
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

// 사용 예시
console.log(getCombinations([1, 2, 3, 4], 2));
console.log(getCombinations([1, 2, 3, 4, 5], 3));

// 12977
// 68644
