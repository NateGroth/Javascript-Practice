showStars(5);

function showStars(rows) {
    let stars = "";

    for (i=0; i < rows; i++) {
        stars += '*';
        console.log(stars);
    }
}