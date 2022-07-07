// #1 Solution
// console.log(hello);
// let hello = "Hello World";

let hello
console.log(hello); // undefined
let hello = "Hello World";

//#2 Solution
// let needle = 'haystack';
// test();
// function test(){
//     let needle = 'magnet';
//     console.log(needle);
// }

let needle
function test(){
    let needle = 'magnet';
    console.log(needle); //magnet
}
test();
let needle = 'haystack';

//#3 Solution
// let brendan = "super cool";
// function print() {
//     brendan = "only okay";
//     console.log(brendan);
// }
// console.log(brendan);

let brendan
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //undefined

//#4 Solution
// let food = "chicken";
// console.log(food);
// eat();
// function eat() {
//     food = "half-chicken";
//     console.log(food);
//     let food = "gone";
// }

let food
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}
console.log(food);//undefined
eat();//half-chicken


//#5 Solution
// mean();
// console.log(food);
// let mean = function () {
//     food = "chicken";
//     console.log(food);
//     let food = "fish";
//     console.log(food);
// };
// console.log(food);

let mean
mean(); //mean is not a function
console.log(food);
let mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);

//#6 Solution
// console.log(genre);
// let genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     let genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

let genre
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);
console.log(genre);
let genre = "disco";


//#7 Solution
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     let dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
console.log(dojo);


//#8 Solution - Bonus
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
