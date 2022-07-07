const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
console.log("An array of pokémon objects where the id is evenly divisible by 3")
const one = pokémon.filter( p => p.id % 3 === 0);
console.log(one);
console.log("------------------------------------------------------------------")

// an array of pokémon objects that are "fire" type
console.log("an array of pokémon objects that are 'fire' type")
const two = pokémon.filter(p => p.types.includes("fire"));
console.log(two);
console.log("------------------------------------------------------------------")

// an array of pokémon objects that have more than one type
console.log("An array of pokémon objects that have more than one type");
const three = pokémon.filter(p => p.types.length > 1);
console.log(three);
console.log("------------------------------------------------------------------")

// an array with just the names of the pokémon
console.log("An array with just the names of the pokémon");
const four = pokémon.map(p => p.name);
console.log(four);
console.log("------------------------------------------------------------------")

// an array with just the names of pokémon with an id greater than 99
console.log("An array with just the names of pokémon with an id greater than 99")
const five = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(five);
console.log("------------------------------------------------------------------")

// an array with just the names of the pokémon whose only type is poison
console.log("An array with just the names of the pokémon whose only type is poison")
const six = pokémon.filter(p => p.types.length === 1 && p.types[0]==="poison").map(p => p.name);
console.log(six);
console.log("------------------------------------------------------------------")

// an array containing just the first type of all the pokémon whose second type is "flying"
console.log("An array containing just the first type of all the pokémon whose second type is 'flying'")
const seven = pokémon.filter(p => p.types[1]==="flying").map(p => p.types[0]);
console.log(seven);
console.log("------------------------------------------------------------------")

// a count of the number of pokémon that are "normal" type
console.log("A count of the number of pokémon that are 'normal' type")
const eight = pokémon.filter(p => p.types.includes("normal")).length;
console.log(eight);
console.log("------------------------------------------------------------------")