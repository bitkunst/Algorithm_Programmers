function solution(strings, n) {
    let answer = [];

    // 1. strings 배열에서 사전순으로 정렬하기
    const sortedStrings = strings.sort(compare);

    // 2. 사전순으로 정렬된 배열 안에서 다시 문자열의 인덱스 n번째 글자 기준으로 정렬하기
    answer = sortedStrings.sort((a, b) => {
        if (a[n] < b[n]) return -1;
        else if (a[n] > b[n]) return 1;
        else return 0;
    });

    return answer;
}

function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}
