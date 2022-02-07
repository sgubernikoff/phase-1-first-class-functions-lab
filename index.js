// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
// function returnFirstTwoDrivers() {
//   return drivers.slice(0, 2);
// }

// function returnLastTwoDrivers() {
//   return drivers.slice(2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(multiply) {
//   return function (fare) {
//     return fare * multiply;
//   };
// }

// const fareDoubler = createFareMultiplier(2);
// const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(drivers, newer) {
//   return newer(drivers);
// }

// // selectDifferentDrivers(drivers, returnFirstTwoDrivers);
// function pageLoad() {
//   console.log("Page has loaded, run the program");
//   return "this is page";
// }
// pageLoad();
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiply) {
  return function (fare) {
    return fare * multiply;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driver, cb) {
  return cb(driver);
}
