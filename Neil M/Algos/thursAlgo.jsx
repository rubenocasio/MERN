//Corona Virus At Risk

/* 
    Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
        firstName[string]
        lastName[string]
        isSocialDistancing[bool]
        hasCovid[bool]

    return a new array of the names of people (not friends) who are at high risk of infection

    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods such as Filter, Map, Reduce, etc...
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ["Person One", "Person Three"];

const coronaVirusAtRisk = (persons) => {
    const atRiskPersons = [];

    for (const person of persons) {
        if (person.isSocialDistancing === false) {
        for (const friend of person.friends) {
            if (friend.isSocialDistancing === false && friend.hasCovid) {
            atRiskPersons.push(`${person.firstName} ${person.lastName}`);
            break;
            }
        }
        }
    }
    return atRiskPersons;
}
console.log(coronaVirusAtRisk(people))

const functionalCoronaVirusAtRisk = (persons) =>
    persons.filter((person) =>
    person.isSocialDistancing === false && person.friends.findIndex(
            (friend) => friend.isSocialDistancing === false && friend.hasCovid
        ) > -1
    )
    .map((person) => `${person.firstName} ${person.lastName}`);

console.log(functionalCoronaVirusAtRisk(people));

/*****************************************************************************/
//Santas Naughty List
/* 
    Given an array of objects representing people, and a string representing a bad habit
    return a "santasNaughtyList" containing the first and last names of all the people who
    have the matching bad habit so that santa knows how much coal he needs.

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods such as Filter, Map, Reduce, etc...
*/
const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];

const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "vapes too much";
const expected3 = [];


const santasNaughtyList = (persons, badHabit) => {
    const coalRecipients = [];

    for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    for (let j = 0; j < person.habits.length; ++j) {
        const personsHabit = person.habits[j];

    if (personsHabit === badHabit) {
        coalRecipients.push(`${person.firstName} ${person.lastName}`);
        break;
    }
    }}
    return coalRecipients;
}
console.log(santasNaughtyList(students, badHabit1));

const functionalSantasNaughtyList = (persons, badHabit) => persons
    .filter((person) => person.habits.includes(badHabit)).map((person) => `${person.firstName} ${person.lastName}`);
    
console.log(functionalSantasNaughtyList(students, badHabit1));