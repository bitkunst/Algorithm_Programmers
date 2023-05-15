function solution(new_id) {
    let answer = '';

    // 1단계 : 소문자로 치환
    const lowerCaseId = new_id.toLowerCase();

    // 2단계 : 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    const filteredId = lowerCaseId.replace(/[^a-z0-9-_.]/g, '');

    // 3단계 : 마침표 치환
    const substitutedId = filteredId.replace(/\.{2,}/g, '.');

    console.log('substitutedId', substitutedId);

    // 4단계 : 마침표가 처음이나 끝에 위치한다면 제거
    const strArr = substitutedId.split('');
    if (strArr[0] === '.') strArr.splice(0, 1);
    if (strArr[strArr.length - 1] === '.') strArr.splice(strArr.length - 1, 1);

    // 5단계 : 빈 문자열이라면 'a' 대입
    if (strArr.length === 0) strArr.push('a');

    // 6단계 : 길이가 16 이상이면 첫 15개의 문자만 취합
    if (strArr.length >= 16) strArr.splice(15);
    if (strArr[strArr.length - 1] === '.') strArr.splice(strArr.length - 1, 1);

    // 7단계 : 길이가 2 이하라면 마지막 문자를 길이가 3이 될 때까지 반복해서 붙인다.
    if (strArr.length <= 2) {
        const lastLetter = strArr[strArr.length - 1];
        while (strArr.length < 3) {
            strArr.push(lastLetter);
        }
    }

    answer = strArr.join('');

    return answer;
}

const test1 = solution('...!@BaT#*..y.abcdefghijklm');
const test2 = solution('z-+.^.');
const test3 = solution('=.=');
const test4 = solution('123_.def');
const test5 = solution('abcdefghijklmn.p');
console.log('test', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
console.log('test5', test5);
