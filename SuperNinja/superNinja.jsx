const Ninja = require ('../Ninja/ninja.jsx');

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Wisdom: " + this.wisdom + ", 'What one programmer can do in one month, two programmers can do in two months.'")
        return this
    }

    showSenseiStats() {
    super.showStats();
    console.log("Wisdom: " + this.wisdom);
    return this;
    }
}
const master = new Sensei("Sensei Ruben");

master.speakWisdom();
master.showSenseiStats();