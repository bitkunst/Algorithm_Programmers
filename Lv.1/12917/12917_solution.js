function solution(s) {
    let answer = '';
    const strArr = [];

    // 1. 문자열 s를 쪼개서 strArr 배열에 담는다.
    for (const letter of s) {
        strArr.push(letter);
    }

    // 2. strArr 배열 안에서 내림차순으로 정렬
    strArr.sort(compare);

    // 3. 문자열이 내림차순으로 정렬된 배열을 사용해서 새로운 문자열 생성
    for (const str of strArr) {
        answer += str;
    }

    return answer;
}

// 내림차순 정렬
function compare(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}
