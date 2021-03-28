const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    let newArr = [];
    for (let i = 0; i < 2; i++) {
        newArr.push(drivers[i]);
    }
    return newArr;
}

function returnLastTwoDrivers() {
    let newArr = [];
    for (let i = 1; i < 3; i++) {
        newArr.unshift(drivers[drivers.length-i]);
    }
    return newArr;
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(x) {
    return function(y) {
        return x * y
    }
}

function fareDoubler(fare) {
    return fare * 2;

}

//function fareTripler(fare) { return fare*3};
fareTripler = fare => {return fare*3}

function selectDifferentDrivers(arr, func) {
    let x = func();
    return x;
}