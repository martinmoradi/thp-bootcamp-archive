class Wizard extends Character {
  constructor(name, hp = 10, mp = 200, attackDmg = 2, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Fireball (25MP)";
  }

  special(victim) {
    this.mp -= 25;
    console.log(
      `${this.name} used fireball against ${victim.name}, dealing 7 damage points`
    );
    victim.takesDamage(7);
    victim.hp <= 0 ? this.isKilled(victim) : null;
  }

  specialAvailable() {
    return (this.mp >= 25); 
  }
}
