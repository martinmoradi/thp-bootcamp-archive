class Necromancer extends Character {
  constructor(name, hp = 10, mp = 60, attackDmg = 2, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Dark Harvest (20MP)";
  }

  special(ennemies) {
    this.mp -= 20;
    console.log(`${this.name} casts Dark Harvest, dealing 1 damage to every other player`)
    ennemies.forEach(enemy => {
      enemy.hp -= 1
      if (enemy.hp <= 0) {
        this.isKilled(enemy)
        this.hp += 5
        if (this.hp + 5 >= this.maxHp) {
          this.hp = this.maxHp
        }
        console.log(`Dark Harvest killed ${enemy.name} and thus feed the necromancer who regenated 5 health points !`)
      }
    })
  }

  specialAvailable() {
    return (this.mp >= 20)
  }
}
