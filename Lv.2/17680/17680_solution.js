function solution(cacheSize, cities) {
    let answer = 0;
    const cacheStorage = [];
    if (cacheSize === 0) return cities.length * 5;

    for (const item of cities) {
        const city = item.toLowerCase();
        const idx = cacheStorage.indexOf(city);
        if (idx !== -1) {
            // cache hit!
            answer += 1;
            // LRU 알고리즘을 위해 순서 조정
            cacheStorage.splice(idx, 1); // 요소 제거
            cacheStorage.unshift(city);
            continue;
        }

        // cache miss && 추가 캐싱 불가능
        if (cacheStorage.length === cacheSize) {
            cacheStorage.pop();
            answer += 5;
            cacheStorage.unshift(city);
        } else {
            // cache miss && 캐싱 가능
            answer += 5;
            cacheStorage.unshift(city);
        }
    }

    return answer;
}

const test1 = solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']);
const test2 = solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']);
const test3 = solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
]);
const test4 = solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
]);
const test5 = solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']);
const test6 = solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);
console.log('test5', test5);
console.log('test6', test6);
