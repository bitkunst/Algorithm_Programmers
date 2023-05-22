function solution(price, money, count) {
    let answer = 0;
    let priceStack = 0;

    // 이용 횟수에 따른 누적 이용료 계산
    for (let i = 1; i <= count; i++) {
        priceStack += price * i;
    }

    if (priceStack > money) answer = priceStack - money;

    return answer;
}

const test = solution(3, 20, 4);
console.log('test', test);
