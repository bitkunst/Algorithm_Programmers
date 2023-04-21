function solution(n) {
    let answer = -1;
    const rootNum = findRootNum(n);

    if (rootNum) {
        answer = (rootNum + 1) ** 2;
    }

    return answer;
}

function findRootNum(n) {
    let root = 0;

    for (let i = 1; i <= n; i++) {
        if (i ** 2 === n) {
            root = i;
            return root;
        }
    }

    return root;
}
