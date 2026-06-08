class Monk extends Character {
  constructor(name, hp = 8, mp = 160, attackDmg = 2, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Heal (25MP)";
  }

  special(victim) {
    this.mp -= 25;
    if (this.hp + 8 >= this.maxHp) {
      this.hp = this.maxHp;
    } else {
      this.hp += 8;
    }
    console.log(`${this.name} has healed himself for 8hp`);
  }

  specialAvailable() {
    return this.mp >= 25;
  }
}
