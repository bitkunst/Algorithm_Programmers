const arr1 = Array(3).fill(0);
/**
 * Array(3) 을 사용하여 길이 3인 빈 배열 생성
 * fill(0) 으로 배열의 모든 요소를 0으로 초기화
 */
const arr2 = Array.from({ length: 3 }).fill(0);
/**
 * Array.from() 메소드는 주어진 객체로부터 배열을 생성
 * { length: 3 } 은 길이 속성만 있고 나머지는 없는 단순한 객체
 * Array.from({ length: 3 }) 은 객체를 사용하여 길이가 3인 배열을 생성. 이 배열의 요소들은 undefined로 초기화
 * fill(0) 으로 배열의 모든 요소를 0으로 초기화
 */

const arr3 = Array.from({ length: 3 }, () => []);
/**
 * Creates an array from an iterable object
 * @param iterable — An iterable object to convert to an array.
 * @param mapfn — A mapping function to call on every element of the array.
 */

console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
