const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') return 'Not a number';
    d3 = (input % 3) == 0;
    d5 = (input % 5) == 0;
    if (d3 && !d5) return "Fizz";
    else if (!d3 && d5) return 'Buzz';
    else if (d3 && d5) return 'FizzBuzz';
    else return input + '';

}