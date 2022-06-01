// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(object) {
//     let drivers = drivers.filter(drivers, arr) => {
//         return drivers.toLowerCase === drivers;
// });
// // }
function findMatching(drivers, string) {
    let match = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return match
}



function fuzzyMatch(drivers, string) {
    let firstLetters = drivers.filter(driver => driver.slice(0, string.length) === string.slice(0, string.length))
    return firstLetters
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }

// function fuzzyMatch(drivers, name){
//     const fuzzyDrivers = drivers.filter(function(person){
//         return person.slice(0) == name.slice(0);
//     });
//     return fuzzyDrivers;
// }