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
        console.log(`Hello, my name is ${this.name}`);
    }

    showStats() {
        console.table(`Health: ${this.health}\n Speed: ${this.speed}\nStrength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

let ruben = new Ninja("Ruben Ocasio", 10, 10, 10);
ruben.sayName();
ruben.showStats();
ruben.drinkSake();
ruben.showStats();

ruben.drinkSake();
ruben.showStats();

module.exports = Ninja;