// Create a Ninja Class
class Ninja {
    constructor(name, health, speed, strength) { // Add attributes
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    // Create methods
    sayName() {
        console.log(`Hello, ${this.name}`);
    }

    showStats() {
        console.table(`Health: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

module.exports = Ninja;
let ruben = new Ninja("Ruben David Ocasio", 10, 10, 10);
ruben.sayName();
// ruben.drinkSake();
ruben.showStats();
// ruben.sayName();
ruben.drinkSake();
ruben.showStats();

module.exports = Ninja;