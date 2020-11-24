// We are tasked to create a program that takes in any number of command line arguments
// which will be numbers, and adds them toghther in and returns a sum.
// WHEN should i commit?

console.log("Command Line Arguments!");

const sumArray = function(numbersArr) {
    let sum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        // i is the index of the number in the array
        if (parseInt(numbersArr[i])) {
            sum = sum + parseInt(numbersArr[i]);
        }
    }
    return sum;
}

const numbers = process.argv.slice(2);
// numbers is an array
console.log(numbers);
const answer = sumArray(numbers);
console.log("result: ", answer);