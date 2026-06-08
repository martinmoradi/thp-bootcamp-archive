class Berzerker extends Character {
    constructor(name = "Draven", hp = 8, dmg = 4, mana = 0, status = "playing", specialAttack = "Rage", specialActiveted = false) {
        super(name, hp, dmg, mana, status, specialActiveted);
        this.specialAttack = specialAttack
    }

    special = () => {
        this.dmg += 1;
        this.hp -= 1;
        console.log("");
        console.log(`========== Special of ${this.name} ==========`);
        console.log("");
        console.log(`${this.name} receives +1DMG and -1HP`);
    }
}