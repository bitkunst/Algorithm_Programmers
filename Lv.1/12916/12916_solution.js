function solution(s) {
    let answer = true;
    let pCount = 0;
    let yCount = 0;
    const lowerCaseString = s.toLowerCase();

    for (const letter of lowerCaseString) {
        if (letter === 'p') pCount++;
        if (letter === 'y') yCount++;
    }

    if (pCount !== yCount) answer = false;

    return answer;
}

const result1 = solution('pPoooyY');
const result2 = solution('Pyy');
console.log('result1', result1);
console.log('result2', result2);
