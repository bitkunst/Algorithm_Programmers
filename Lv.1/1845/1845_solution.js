function solution(nums) {
    let answer = 0;
    let frequencyCounter = {};
    let howMany = 0;
    let max = nums.length / 2;

    for (let phonekemon of nums) {
        frequencyCounter[phonekemon] = (frequencyCounter[phonekemon] || 0) + 1;
    }

    const phonekemonArr = Object.keys(frequencyCounter);
    howMany = phonekemonArr.length;

    if (howMany > max) answer = max;
    else answer = howMany;

    return answer;
}

// test
const testArr = [3, 1, 2, 3];
const result = solution(testArr);
console.log('result', result);
