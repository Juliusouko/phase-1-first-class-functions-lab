// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier =  multiplier => fare => fare*multiplier;


const fareDoubler=createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);

const selectDifferentDrivers= (drivers,driverCallback) =>
{
    if(driverCallback===selectingDrivers[0]) return selectingDrivers[0](drivers);
    
    else return selectingDrivers[1](drivers);
}
