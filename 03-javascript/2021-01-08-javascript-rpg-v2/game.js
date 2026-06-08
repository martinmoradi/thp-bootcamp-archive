class Game {
    constructor(turn = 10, status = "ongoing") {
        this.turn = turn
        this.status = status
    }

    initializeCharacter = () => {
        const initCharacters = [
            new Paladin(),
            new Berzerker(),
            new Assassin(),
            new Monk(),
            new Fighter()
        ]
        return initCharacters
    }

    turnLeft = (i) => {
        console.log(`********** Round ${i + 1} **********`);
        console.log(`Remaining Turn: ${this.turn}`);
        console.log("");
    }

    newTurn = () => {
        this.turn--;
    }

    endGame = (array) => {
        if (this.turn === 0 || array.length <= 1) {
            this.status = "finish";
            console.log("Game Over");
            let survivors = this.checkAlive(array)
            console.log("########## Survivors ##########")
            console.log("");
            survivors.forEach(char => console.log(char.name))
        }
    }

    checkAlive = checkCharacters => {
        return checkCharacters.filter(char => char.status !== "loser");
    }

    resetCharacter = array => {
        return array.map(char => char.protect = false)
    }

    myStats = player => {
        console.log(`${player.name}: ${player.constructor.name} - ${player.hp}HP - ${player.mana}Mana - ${player.dmg}DMG - ${player.specialAttack}`)
    }

    watchStats = (player, allCharacters) => {
        const victims = allCharacters.filter(char => char !== player && char.status !== "loser")
        victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1} - ${victim.name}: ${victim.constructor.name} - ${victim.hp}HP - ${victim.mana}Mana - ${victim.dmg}DMG`))
    }

    checkAssassinMark = array => {
        const mark = array.filter(char => char.assassinMark !== false && char.assassinMark !== undefined)[0];
        if (mark !== undefined) {
            mark.shadowHit(mark.assassinMark)
        }
    }

}