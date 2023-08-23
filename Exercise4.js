// speed limit = 70
//f5 > 1 point

const output = checkSpeed(129);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Okay');
        return;
        }
    let points =  (Math.floor((speed - speedLimit) / kmPerPoint));
    if (points >= 12) 
        console.log('License Suspended');
    else
        console.log('Points:', points);
    
}
