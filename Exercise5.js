showNumbers(10);

function showNumbers(limit) {
    if (typeof limit !== 'number') return 'Not a number';
    for (let i= 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'ODD';
        console.log(i, message);
    }
}