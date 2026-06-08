class Figher extends Character {
  constructor(name, hp = 12, mp = 40, attackDmg = 4, status, protection = 0) {
    super(name, hp, mp, attackDmg, status, protection);
  }

  specialName() {
    return "Dark Vision (40MP)";
  }

  special(victim) {
    this.mp -= 40;
    this.protection = +2;
    console.log(
      `${this.name} used Dark Vision, dealing 5 damage points to ${victim.name} and shielding himself, reducing damage taken until next turn.`
    );
    victim.takesDamage(5);
    victim.hp <= 0 ? this.isKilled(victim) : null;
  }

  specialAvailable() {
    return this.mp >= 40;
  }
}
