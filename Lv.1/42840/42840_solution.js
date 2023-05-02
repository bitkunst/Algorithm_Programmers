function solution(answers) {
    let answer = [];
    const supoja1 = [1, 2, 3, 4, 5];
    const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const howMany = {};
    let pointer1 = 0;
    let pointer2 = 0;
    let pointer3 = 0;

    // answers를 순회하면서 수포자들의 정답지 채점
    for (const ans of answers) {
        if (pointer1 >= supoja1.length) pointer1 = pointer1 % supoja1.length;
        if (pointer2 >= supoja2.length) pointer2 = pointer2 % supoja2.length;
        if (pointer3 >= supoja3.length) pointer3 = pointer3 % supoja3.length;

        howMany[1] = supoja1[pointer1] === ans ? (howMany[1] || 0) + 1 : howMany[1] || 0;
        howMany[2] = supoja2[pointer2] === ans ? (howMany[2] || 0) + 1 : howMany[2] || 0;
        howMany[3] = supoja3[pointer3] === ans ? (howMany[3] || 0) + 1 : howMany[3] || 0;

        pointer1++;
        pointer2++;
        pointer3++;
    }

    const max = Math.max(...Object.values(howMany));
    const supojaArr = Object.keys(howMany);

    for (const supoja of supojaArr) {
        if (howMany[supoja] === max) answer.push(parseInt(supoja));
    }

    answer.sort(asc);

    return answer;
}

function asc(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const test1 = solution([1, 2, 3, 4, 5]);
const test2 = solution([1, 3, 2, 4, 2]);
console.log('test1', test1);
console.log('test2', test2);
