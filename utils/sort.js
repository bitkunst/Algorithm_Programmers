function asc(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function desc(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

// cf) 12915
const arr1 = [6, 5, 8, 2, 4, 1, 9, 7];
const arr2 = [6, 5, 8, 2, 4, 1, 9, 7];
const ascArr = arr1.sort(asc);
const descArr = arr2.sort(desc);

console.log('ascArr', ascArr);
console.log('descArr', descArr);
