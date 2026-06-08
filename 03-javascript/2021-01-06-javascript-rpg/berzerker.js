class Berzerker extends Character {
  constructor(
    name,
    hp = 8,
    mp = 0,
    attackDmg = 4,
    status    
  ) {
     super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Rage (1HP)"
  }

  special() {
    this.hp -= 1
    this.attackDmg += 1
    console.log(`${this.name} enrages, gaining 1 permanent damage at the cost of 1 health`)
  }

  specialAvailable() {
    return (this.hp > 1);
  }
  
}
