function solution(seoul) {
    let answer = '';
    let indexOfKim = 0;

    // 1. seoul 배열을 순회하면서 "Kim" 문자열 찾기
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') indexOfKim = i;
    }

    answer = `김서방은 ${indexOfKim}에 있다`;

    return answer;
}

const seoul = ['Jane', 'Kim'];
const result = solution(seoul);
console.log('result', result);
