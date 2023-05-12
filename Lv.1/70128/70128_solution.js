function solution(a, b) {
    let answer = 0;

    // 내적 포인터
    let pointer = 0;

    while (pointer < a.length) {
        answer += a[pointer] * b[pointer];
        pointer++;
    }

    return answer;
}
