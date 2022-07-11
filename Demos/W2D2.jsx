//Higher order functions
// .map .filter . reduce

// .map - loops and returns an Array
// let result1 = [1,2,3,4].map(n => console.log(n))
// let result = [1, 2, 3, 4].map((n) => n * 2);
// let result2 = [1,2,3,4].map(n => n * 2)
// console.log(result2)

const double = (numbers) => {
    let result = []
    for(const n of numbers){
        result.push(n*2)
    }
    return result
}
// const nums = [1,2,3,4,5]
// console.log(double(nums));


const doubleMap = (numbers) => {
    return numbers.map(n => n * 2)
}
// console.log(doubleMap([1, 2, 3, 4, 5]));

// .filter loops and returns an Array with matching conditions
const filter = (numbers, greaterThan) => {
    let result = []
    for(const n of numbers) {
        if(n > greaterThan){
            result.push(n)
        }
    }
    return {result}
}
// console.log(filter([1,2,3,4,5,6],3))

const nums = [1,2,3,4,5,6]
console.log(nums.filter(n => n > 2))


const actors = [
    {name: 'Ruben', netWorth: 20000000},
    {name: 'Tai', netWorth: 30000000},
    {name: 'Petey', netWorth: 10},
]
console.log(actors.filter(a=>a.netWorth > 10))