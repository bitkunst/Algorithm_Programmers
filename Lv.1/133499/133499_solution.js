function solution(babbling) {
    let answer = 0;
    let words = ['aya', 'ye', 'woo', 'ma'];

    // 1. pattern을 만든다.
    for (let i = 0; i < words.length; i++) {
        const pattern = new RegExp(words[i], 'g');

        // 2. babbling 배열에서 패턴을 찾아 교체
        for (let j = 0; j < babbling.length; j++) {
            babbling[j] = babbling[j].replace(pattern, i);
        }
    }

    // 3. 완전히 교체된 발음 찾기 && 연속 발음 거르기
    for (const word of babbling) {
        let isLetter = false;
        let double = false;

        for (let k = 0; k < word.length; k++) {
            if (isNaN(parseInt(word[k]))) isLetter = true;
            if (word[k] === word[k + 1]) double = true;
        }

        if (double || isLetter) continue;
        answer++;
    }

    return answer;
}

const test1 = solution(['aya', 'yee', 'u', 'maa']);
const test2 = solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']);
console.log('test1', test1);
console.log('test2', test2);
