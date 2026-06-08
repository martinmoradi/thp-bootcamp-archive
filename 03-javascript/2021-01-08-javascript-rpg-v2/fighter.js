class Fighter extends Character {
    constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status = "playing", specialAttack = "Dark Vision", specialActiveted = false) {
        super(name, hp, dmg, mana, status, specialActiveted);
        this.specialAttack = specialAttack
        this.protect = false
    }

    special = victim => {
        let dmgReceived = 5;
        if (victim.protect === true) {
            dmgReceived -= 2
        } else if (victim.markOfCain === true) {
            dmgReceived -= 0
        }
        victim.hp -= dmgReceived;
        this.mana -= 20;
        this.protect = true
        console.log("");
        console.log(`========== Special of ${this.name} ==========`);
        console.log("");
        console.log(`${this.name} receives +20mana`);
        console.log(`${this.name} is attacking ${victim.name}. He deals him ${dmgReceived} damages`)
        if (victim.hp <= 0) {
            victim.status = "loser";
            console.log(`++++++++++ ${victim.name} is dead !! ++++++++++`);
        }
    }
}