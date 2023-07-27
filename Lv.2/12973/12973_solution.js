function solution(s) {
    const strArr = s.split('');

    while (strArr.length > 0) {
        // 부분문자열 계산
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === strArr[i + 1]) {
                strArr.splice(i, 2);
                break;
            }

            // 일치하는 짝이 없다면
            if (i === strArr.length - 1) return 0;
        }
    }

    return 1;
}

const test1 = solution('baabaa');
