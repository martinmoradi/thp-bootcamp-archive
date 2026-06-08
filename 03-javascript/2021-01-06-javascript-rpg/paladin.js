class Paladin extends Character {
  constructor(name, hp = 16, mp = 160, attackDmg = 3, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Healing Lighting (40MP)";
  }

  special(victim) {
    this.mp -= 40;
    if (this.hp + 5 >= this.maxHp) {
      this.hp = this.maxHp;
    } else {
      this.hp += 5;
    }
    victim.takesDamage(4);
    victim.hp <= 0 ? this.isKilled(victim) : null;
    console.log(
      `${this.name} used healing ligthing against ${victim.name}, dealing 4 damage points and healing himself for 5`
    );
  }

  specialAvailable() {
    return (this.mp >= 40);
  }

}
