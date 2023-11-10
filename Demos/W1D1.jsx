const sumArrow = (a,b) => {
    return a + b
}

const addArrow2 = (a,b) => {return a + b};
const subArrow2 = (a, b) => {return a - b;};
const divArrow2 = (a, b) => {return a / b;};
const mulArrow2 = (a, b) => {return a * b;};

console.log(addArrow2(10,50)); //60
console.log(subArrow2(10, 50)); // -40
console.log(divArrow2(10, 50)); // 0.2
console.log(mulArrow2(10, 50)); //500

let calculateFoodTotal = (food, tip) => {
    food = prompt("Food total? ")
    tip = prompt("Tip amount? ")
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = food + tipAmount
    return total
}
// console.log(calculateFoodTotal());

// Arrays
//Allows multiple things

// groceries = ['banana', 'apple', 'orange', 'pear', 'peach']

// console.log(groceries[2]) //indexing grabbing the 2nd item

//Array .push 
// groceries.push('blueberries')
// console.log(groceries)

//Array .slice starts at 0 and up to 2, however doesn't include 2
// console.log(groceries.slice(3,6))

//Array methods IndexOf & length
// console.log(groceries.indexOf('orange'))
// console.log(groceries.length)


//Objects //Add properties
const person = {
    fname: 'Ruben',
    lname: 'Ocasio',
}
//Access objects: dot notation vs. bracket notation
//console.log(person.fname + " " + person.lname);
//console.log(person.lname)
//bracket notation
//console.log(person["fname"]);

//assign object
person.phone = '757-575-4444'
// console.log(person.phone)

const person2 = {
    name: "Tai",
    shirt: "Black",
};
// console.log(person2.name)
//Method inside an object like Math.floor
const introducer = (name, shirt) => {
    const person2 = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 50000,
        netWorth: function () {
            return this.assets - this.liabilities
        }
    };
    const intro = `Hi my name is ${person2.name} and shirt is ${person2.shirt} and my networth is ${person2.netWorth()}`;
    return intro
}
// console.log(introducer('Ruben', 'black'))

//For Loops
const fruits = ["banana", "apple", "orange", "pear", "peach", "blueberries"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);
// console.log(fruits[6]);

// for(let i = 0; i < fruits.length; i++) {
//     console.log(i,  fruits[i]);
// }

// for (const f of fruits) {
//     console.log(f)
// }

// const numbers = [1,2,3,4,5,6]
// for(const n of numbers) {
//     console.log(n*2)
// }

const numbers = [1, 2, 3, 4, 5, 6];
const double = () => {
    let result = []
    for (const n of numbers) {
    //   console.log(n * 2)
        result.push(n*2)
    }
    return result;

}
// console.log(double(numbers))

// const howManyLetters = () => {
//     const phrase = 'Yo, can you go to the store for me? '

//     for(const p in phrase) {
//         console.log(p)
//     }
// }
// howManyLetters();
// console.log(howManyLetters())

// let result = 0;
// const howManyLetters = () => {
//     for(const p in phrase) {
//         console.log(Number(p)+1)
//         result = Number(p) + 1
//     }
//     return {result}
// }
// console.log(howManyLetters());

// const phrase = prompt("Yo, can you go to the store for me? ");

let result = 0;
const howManyLetters = (phrase) => {
        for(const p in phrase) {
            console.log(Number(p)+1)
            result = Number(p) + 1
        }
        return {result}
    // return { result: phrase.length };
}
// const phrase = "Yo, can you go to the store for me? ";
// console.log(howManyLetters(phrase));

const sumArray = (numbers) => {
    let result = 0
    //for loop
    for(const n of numbers){
        result = result + n
    }
    return {result}
} 
// const nums = [1,2,3,4,5] //15
// console.log(sumArray(nums));

const max = (numbers) => {
    let result = numbers[0]
    //
    for(const n of numbers) {
        if(n > result) {
            result = n
        }
    }
    return {result}
}
let nums = [1,2,3,4,5,20, 100, 30]
// console.log(max(nums))

//Letter frequency
const frequency = (phrase) => {
    let freq = {}
    for(const letter of phrase){
        if(letter in freq){
            freq[letter] = freq[letter] + 1;
            //freq[letter] += 1;
            // or freq[letter]++;
        } else {
            freq[letter] = 1
        }
    }
    return {freq}
}
// console.log(frequency("Yo, what's up with you? When are you coming back into town?"))

const wordfrequency = (phrase) => {
    let frequency = {}
    words = phrase.split(' ')
    for(const w of words){
        console.log(w)
        if(w in frequency){
            frequency[w] += 1
        } else {
            frequency[w] = 1 
        }
    }
    return { frequency };
}
console.log(wordfrequency("Yo yo yo yo, what's up with you? When are you coming back into town? Damn Yo"))

//incremental operators
//++, --, +=

const wordfrequency2 = (phrase) => {
    const words = phrase.split(' ')
    return frequency(words)
}
console.log(wordfrequency2("Yo yo yo yo, what's up with you? When are you coming back into town? Damn Yo"))
