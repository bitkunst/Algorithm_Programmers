process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    const numArr = data.split(' ');
    const n = Number(numArr[0]);
    const m = Number(numArr[1]);
    let row = '';

    // 가로 길이 n
    for (let i = 0; i < n; i++) {
        row += '*';
    }

    // 세로 길이 m
    for (let i = 0; i < m; i++) {
        console.log(row);
    }
});
