let truth = [0, null, undefined, '', '', 3];

console.log(countTruthy(truth));

function countTruthy(array) {
    let counter = 0;
    for (let value of array) {
        if (value) {
            counter++;
        }
    }
    return counter;
            
}