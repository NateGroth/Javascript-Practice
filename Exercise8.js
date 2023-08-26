console.log(sum(3));

function sum(limit) {
    let multiples = 0;

    for (i=0; i<= limit; i++) 
        if (i % 3 == 0 || i % 5 == 0) 
            multiples += i;

    return multiples;
    
}