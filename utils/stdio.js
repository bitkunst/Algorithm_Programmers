// JavaScript 표준 입출력

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    const arr = data.split(' ');
    // 실행 코드
    console.log(arr);
});
