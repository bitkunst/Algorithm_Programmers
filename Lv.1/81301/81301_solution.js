function solution(s) {
    let answer = 0;
    const stringNumMap = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    for (const str in stringNumMap) {
        const regExp = new RegExp(str, 'g');
        s = s.replace(regExp, stringNumMap[str]);
    }

    answer = parseInt(s);

    return answer;
}

const test1 = solution('one4seveneight');
const test2 = solution('23four5six7');
const test3 = solution('2three45sixseven');
const test4 = solution('123');

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
