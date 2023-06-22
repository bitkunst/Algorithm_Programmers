let map = new Map();

// set(key, value)
map.set('name', 'Alice');
map.set('age', 25);
console.log(map); // Map(2) { 'name' => 'Alice', 'age' => 25 }

// get(key)
console.log(map.get('name')); // 'Alice'

// has(key)
console.log(map.has('name')); // true

// delete(key)
map.delete('age');
console.log(map); // Map(1) { 'name' => 'Alice' }

// size
console.log(map.size); // 1

// clear()
map.clear();
console.log(map); // Map(0) { }

/***************************************************/

map.set('name', 'Alice');
map.set('age', 25);
map.set('city', 'Paris');

// keys()
for (let key of map.keys()) {
    console.log(key);
}
// 'name'
// 'age'
// 'city'

// values()
for (let value of map.values()) {
    console.log(value);
}
// 'Alice'
// 25
// 'Paris'

// entries()
for (let entry of map.entries()) {
    console.log(entry);
}
// [ 'name', 'Alice' ]
// [ 'age', 25 ]
// [ 'city', 'Paris' ]

// forEach(callbackFn[, thisArg])
map.forEach((value, key) => {
    console.log(key + ': ' + value);
});
// 'name: Alice'
// 'age: 25'
// 'city: Paris'

// 키가 이미 존재한다면, 그 키에 대한 값은 새로운 값으로 업데이트 된다.
// 그러나 이러한 업데이트가 Map 내의 키-값 쌍의 순서에는 영향을 미치지 않는다.
let map2 = new Map();
map2.set('name', 'Alice');
map2.set('age', 25);
map2.set('city', 'Paris');

// Map(3) { 'name' => 'Alice', 'age' => 25, 'city' => 'Paris' }
console.log(map2);

map2.set('name', 'Bob');

// Map(3) { 'name' => 'Bob', 'age' => 25, 'city' => 'Paris' }
console.log(map2);
