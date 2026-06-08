class Paladin extends Character {
    constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status = "playing", specialAttack = "Healing Lighting", specialActiveted = false) {
        super(name, hp, dmg, mana, status, specialActiveted);
        this.specialAttack = specialAttack
    }

    special = victim => {
        let dmgReceived = 4;
        if (victim.protect === true) {
            dmgReceived -= 2
        } else if (victim.markOfCain === true) {
            dmgReceived -= 0
        }
        victim.hp -= dmgReceived;
        this.hp += 5;
        this.mana -= 40;
        console.log("");
        console.log(`========== Special of ${this.name} ==========`);
        console.log("");
        console.log(`${this.name} is attacking ${victim.name}. He deals him ${dmgReceived} damages`);
        console.log(`${this.name} receives +5hp and loses -40mana`)
        if (victim.hp <= 0) {
            victim.status = "loser";
            console.log(`++++++++++ ${victim.name} is dead !! ++++++++++`);
        }
    }

}