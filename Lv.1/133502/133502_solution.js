function solution(ingredient) {
    let answer = 0;
    const order = [1, 2, 3, 1]; // 재료 순서 : 1 - 2 - 3 - 1
    const hamburgerStack = [];

    // 1. 재료 순회 하면서 햄버거 스택 만들기
    for (let i = 0; i < ingredient.length; i++) {
        hamburgerStack.push(ingredient[i]);

        if (hamburgerStack.length >= 4) {
            const end = hamburgerStack.length - 1;
            const start = hamburgerStack.length - order.length;

            // 2. 햄버거 스택과 재료 순서 비교 (뒤에서부터)
            for (let j = end; j >= start; j--) {
                if (hamburgerStack[j] !== order[j - start]) break;
                if (j === start) {
                    let orderLength = order.length;
                    while (orderLength > 0) {
                        hamburgerStack.pop();
                        orderLength--;
                    }
                    answer++;
                }
            }
        }
    }

    return answer;
}

const test1 = solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
const test2 = solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
console.log('test1', test1);
console.log('test2', test2);
