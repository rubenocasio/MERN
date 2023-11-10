 // Problem 1: Write an arrow function that checks to see if a user is older than 18.
// Arrow function to check if the user is older than 18
const checkAge = (age) => {
    return age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
}
console.log(checkAge(18))
console.log(checkAge(16))

//Problem 2: Write an arrow function that checks to see if it is currently raining.
// Arrow function to check if it's raining
const raining = (isRaining) => {
    return isRaining ? "Get your rain jacket!" : "No rain on today's forecast!";
}
console.log(raining(true))
console.log(raining(false))


//Problem 3: Write an arrow function that checks to see if a number is even.
const isEven = (num) => {
    return num % 2 === 0 ? "That's an even number!" : "That's an odd number!";
}
console.log(isEven(10))
console.log(isEven(7))

// Problem 4: Write an arrow function that takes in two parameters
//and checks whether one number is greater than another.
const isGreaterThan = (num1, num2) => {
    return num1 > num2 ? `${num1} is more than ${num2}.` : `${num1} is less than ${num2}.`
}
console.log(isGreaterThan(5, 3))
console.log(isGreaterThan(2, 4))

//To increase the difficulty, try to write each of your solutions as implicit returns
//with the least amount of characters possible. Look back to the rules of arrow
//functions and how we can simplify them further.

//#1
const checkAgeImplicit = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!"
console.log(checkAge(18))
console.log(checkAge(16))

//#2
const rainingImplicit = isRaining => isRaining ? "Get your rain jacket!" : "No rain on today's forecast!"
console.log(raining(true))
console.log(raining(false))

//#3
const isEvenImplicit = num => num % 2 === 0 ? "That's an even number!" : "That's an odd number!"
console.log(isEven(10))
console.log(isEven(7))

//#4
const isGreaterThanImplicit = (num1, num2) => num1 > num2 ? `${num1} is more than ${num2}.` : `${num1} is less than ${num2}.`
console.log(isGreaterThan(5, 3))
console.log(isGreaterThan(2, 4))