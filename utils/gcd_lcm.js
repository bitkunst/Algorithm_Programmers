function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const gcd_test = gcd(10, 15);
const lcm_test = lcm(10, 15);

console.log('gcd_test', gcd_test);
console.log('lcm_test', lcm_test);
