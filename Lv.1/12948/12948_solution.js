function solution(phone_number) {
    let answer = '';
    let index = phone_number.length - 4;

    // index 보다 큰 경우만 노출
    for (let i = 0; i < phone_number.length; i++) {
        if (i < index) answer += '*';
        else answer += phone_number[i];
    }

    return answer;
}

const result1 = solution('01033334444');
const result2 = solution('027778888');
console.log('result1', result1);
console.log('result2', result2);
