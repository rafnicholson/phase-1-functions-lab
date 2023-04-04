// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    let hq = 42;
    return Math.abs(pickUpLocation - hq);
}

function distanceFromHqInFeet(pickUpLocation) {
    let numOfBlocks = distanceFromHqInBlocks(pickUpLocation);
    let distanceInFeet = numOfBlocks * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(origin, destination) {
    let numOfBlocks = Math.abs(origin - destination);
    let distanceInFeet = numOfBlocks * 264;
    return distanceInFeet;
}

distanceTravelledInFeet(38, 34);

function calculatesFarePrice(start, destination) {
    let numOfFeet = distanceTravelledInFeet(start, destination);
    let fare = ((numOfFeet -400) * 2) / 100;
    let fee = 25;
    if (numOfFeet < 400) {
        return 0;
    } else if (numOfFeet > 400 && numOfFeet <= 2000) {
        return fare;
    } else if (numOfFeet > 2000 && numOfFeet <= 2500) {
        return fee;
    } else {
        return 'cannot travel that far';
    }
}

calculatesFarePrice(192, 64);