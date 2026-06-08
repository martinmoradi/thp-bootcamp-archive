class Assassin extends Character {
  constructor(name, hp = 6, mp = 20, attackDmg = 6, status, specialVictim, isProtected = false) {
    super(name, hp, mp, attackDmg, status);
    this.specialVictim = specialVictim;
    this.isProtected = isProtected;
  }

  specialName() {
    return "Shadow Hit (20MP)";
  }

  special(victim) {
    if (this.specialAvailable() === true) {
      this.specialVictim = victim;
      this.mp -= 20;
      console.log(`${this.name} marked ${victim.name} for death`);
    }
  }

  shadowHit() {
    console.log(`${this.name} embush ${this.specialVictim.name} !`);

    if (this.specialVictim.status === "loser") {
      console.log(`${this.specialVictim.name} is already dead ...`);
      this.shadowHitBacklash();
    } else {
      this.specialVictim.takesDamage(7);
      this.specialVictim.status === "loser" ? null : this.shadowHitBacklash();
    }
  }

  shadowHitBacklash() {
    this.hp -= 7;
    console.log(
      `${this.name} Shadow Hit failed and backlashed for 7 damage points`
    );
    if (this.hp <= 0) {
      console.log(`${this.name} killed himself with Shadow Hit...`);
      this.status = "loser"
    } 
    this.specialVictim = {}
  }

  specialAvailable() {
    return (this.mp >= 20)
  }
}
