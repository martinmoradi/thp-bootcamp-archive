class Turn {
  constructor(aliveCharacters, playingGame) {
    // console.clear()
    this.aliveCharacters = aliveCharacters;
    this.game = playingGame;
    this.shuffleChars();
    this.startEvents();
    this.charActions();
    this.endEvents();
  }

  startEvents() {
    const fighter = this.aliveCharacters.filter(
      (char) => char instanceof Figher
    )[0];
    if (fighter !== undefined && fighter.protection > 0) {
      fighter.protection -= 1;
    }

    const assassin = this.aliveCharacters.filter(
      (char) => char instanceof Assassin
    )[0];
    if (assassin !== undefined && assassin.specialVictim !== undefined) {
      assassin.shadowHit();
      if (assassin.status === "playing") {
        assassin.protected = true;
      }
    }
  }

  endEvents() {
    const assassin = this.aliveCharacters.filter(
      (char) => char instanceof Assassin
    )[0];
    if (assassin !== undefined && assassin.protected !== true) {
      assassin.protected = false;
    }
  }

  humanPlayer() {
    return this.aliveCharacters.filter((char) => char.player === "human")[0];
  }

  shuffleChars() {
    this.aliveCharacters.sort(() => Math.random() - 0.5);
  }

  getRandomVictim(ennemies) {
    return Math.floor(Math.random() * Math.floor(ennemies.length));
  }

  updateAliveCharacters() {
    this.aliveCharacters = this.aliveCharacters.filter(
      (character) => character.hp > 0
    );
  }

  charActions() {
    for (let i = 0; i < this.aliveCharacters.length; i++) {
      console.log(`It's time for ${this.aliveCharacters[i].name} to play.`);
      const ennemies = this.aliveCharacters.filter(
        (char) => char !== this.aliveCharacters[i] && char.hp > 0
      );
      if (ennemies.length < 1) {
        break;
      }

      if (this.aliveCharacters[i] === this.humanPlayer()) {
        // Human plays
        let hasPlayed = false;
        do {
          hasPlayed = true;
          let action = this.humanAction(this.aliveCharacters[i], ennemies);
          action = parseInt(action);
          if (action === 3) {
            this.game.watchStats();
            hasPlayed = false;
          } else {
            if (action === 1) {
              const victim = this.humanAttack(ennemies);
              this.aliveCharacters[i].dealsDamage(
                victim,
                this.aliveCharacters[i].attackDmg
              );
            } else if (action === 2) {
              if (
                this.aliveCharacters[i] instanceof Monk ||
                this.aliveCharacters[i] instanceof Berzerker
              ) {
                this.aliveCharacters[i].special();
              } else if (this.aliveCharacters[i] instanceof Necromancer) {
                this.aliveCharacters[i].special(ennemies);
              } else {
                const victim = this.humanAttack(ennemies);
                this.aliveCharacters[i].special(victim);
              }
            }
          }
        } while (!hasPlayed);
      } else {
        // IA Plays
        this.iaAction(this.aliveCharacters[i], ennemies);
      }

      this.updateAliveCharacters();
      console.log("==========================================================");
    }
  }

  iaAction(char, ennemies) {
    const killable = ennemies.filter((ennemy) => ennemy.hp <= char.attackDmg);
    if (killable.length >= 1) {
      const victim = killable[this.getRandomVictim(killable)];
      char.dealsDamage(victim, char.attackDmg);
    } else {
      const victim = ennemies[this.getRandomVictim(ennemies)];
      char.dealsDamage(victim, char.attackDmg);
    }
  }

  humanAction(char) {
    console.log("It's your turn, select an action :");
    console.log(char.stats());
    console.log("1 - Basic Attack");
    console.log(`2 - Special Attack : ${char.specialName()}`);
    console.log("3 - Watch stats");
    let valid = false;
    do {
      let playerParams = prompt("Enter a number to select your turn action :");
      playerParams = parseInt(playerParams);
      if (playerParams < 1 || playerParams > 3 || isNaN(playerParams)) {
        console.log("Not a valid entry");
      } else if (playerParams === 2 && char.specialAvailable() === false) {
        console.log("Not enough mana");
      } else {
        valid = true;
        return playerParams;
      }
    } while (!valid);
  }

  humanAttack(ennemies) {
    console.log("");
    console.log(" ⚔ Who do you want to attack ? ⚔ ");
    ennemies.forEach(this.displayEnnemies);
    let valid = false;
    do {
      let victimParams = prompt(
        "Enter a number to select your attack target :"
      );
      victimParams = parseInt(victimParams);
      if (
        victimParams < 1 ||
        victimParams > ennemies.length ||
        isNaN(victimParams)
      ) {
        console.log("Not a valid entry");
      } else {
        valid = true;
        return ennemies[victimParams - 1];
      }
    } while (!valid);
  }

  displayEnnemies(ennemy, index) {
    console.log(
      `${index + 1} - ${ennemy.name} (${ennemy.constructor.name}) | ${
        ennemy.hp
      }/${ennemy.maxHp}HP`
    );
  }
}
