class Monk extends Character {
    constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, status = "playing", specialAttack = "Heal", specialActiveted = false) {
        super(name, hp, dmg, mana, status, specialActiveted);
        this.specialAttack = specialAttack
    }

    special = () => {
        this.hp += 8;
        this.mana -= 25;
        console.log("");
        console.log(`========== Special of ${this.name} ==========`);
        console.log("");
        console.log(`${this.name} receives +8HP and -25Mana`);
    }
}