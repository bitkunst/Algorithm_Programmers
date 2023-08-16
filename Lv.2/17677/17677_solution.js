function solution(str1, str2) {
    // 각각의 문자열에 대해 다중집합 만들기
    const str1Arr = [];
    const str2Arr = [];

    for (let i = 0; i < str1.length - 1; i++) {
        const element = str1[i] + str1[i + 1];
        if (isAlphabetOnly(element)) {
            // 영문자를 제외하고 모두 제거 & 소문자로 통일
            str1Arr.push(element.toLowerCase());
        }
    }

    for (let i = 0; i < str2.length - 1; i++) {
        const element = str2[i] + str2[i + 1];
        if (isAlphabetOnly(element)) {
            str2Arr.push(element.toLowerCase());
        }
    }

    // 모두 공집합일 경우
    if (str1Arr.length === 0 && str2Arr.length === 0) {
        return 1 * 65536;
    }

    // 합집합 & 교집합 개수 구하기
    let unionCount = 0;
    let intersectionCount = 0;

    for (const v of str1Arr) {
        const index = str2Arr.indexOf(v);
        if (index === -1) continue;

        intersectionCount++;
        // 공통 원소 제거
        str2Arr.splice(index, 1);
    }

    unionCount = str1Arr.length + str2Arr.length;

    return Math.floor((intersectionCount / unionCount) * 65536);
}

function isAlphabetOnly(str) {
    return /^[a-zA-Z]+$/.test(str);
}

const test1 = solution('FRANCE', 'french');
const test2 = solution('handshake', 'shake hands');
const test3 = solution('aa1+aa2', 'AAAA12');
const test4 = solution('E=M*C^2', 'e=m*c^2');

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
