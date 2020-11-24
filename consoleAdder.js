// We are tasked to create a program that takes in any number of command line arguments
// which will be numbers, and adds them toghther in and returns a sum.
// WHEN should i commit?

// command line arguments?
// how do i remove the first 2 arguments of an array?
// numbers
// add numbers toghether 
// return sum


// starting the repo
// git init
// git remote add
// git push
//////////////////
// work work work
// git add
// git commit
// git push
// REPEAT lines 17-20
console.log("Command Line Arguments!");
const numbers = process.argv.slice(2);
// numbers is an array
console.log(numbers);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    // i is the index of the number in the array
    console.log('index is: ', i);
    console.log('value of that index is: ',parseInt(numbers[i]));
    sum = sum + parseInt(numbers[i]);
}

console.log("SUM is: ", sum);