class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        } else {
            console.log("Target must be a Unit Fool!");
        }
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "res") {
                target.res += this.magnitude;
            } else if (this.stat == "power") {
                target.power += this.magnitude;
            }
        } else {
            console.log("Target must be a Unit idiot!");
        }
    }
}
const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2,"increase target's resilience by 3","res", 3);
const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log(redBelt);
console.log(blackBelt);

hardAlgo.play(redBelt);
hardAlgo.play(blackBelt);

console.log("------After Hard Algo Attack -------");

console.log(redBelt);
console.log(blackBelt);

unhandledPromise.play(redBelt);
pairProgram.play(blackBelt);
console.log(redBelt);
console.log(blackBelt);
console.log("------After UPR Attack -------");

pairProgram.play(redBelt);
pairProgram.play(blackBelt);
console.log(redBelt);
console.log(blackBelt);
console.log("------After  Attack -------");

unhandledPromise.play(blackBelt);
pairProgram.play(blackBelt);

redBelt.attack(blackBelt);
blackBelt.attack(redBelt);

console.log(redBelt);
console.log(blackBelt);

hardAlgo.play(redBelt);
unhandledPromise.play(redBelt);
pairProgram.play(redBelt);
redBelt.attack(blackBelt);

console.log(redBelt);
console.log(blackBelt);

hardAlgo.play(blackBelt);
unhandledPromise.play(blackBelt);
pairProgram.play(blackBelt);
blackBelt.attack(redBelt);

console.log(redBelt);
console.log(blackBelt);
