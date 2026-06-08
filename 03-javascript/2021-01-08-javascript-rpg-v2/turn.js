class Turn {

    constructor(characters, game) {
        this.characters = characters
        this.game = game
        this.startTurn()
    }

    startTurn = () => {
        this.characters.forEach(player => {
            if (player.status !== "loser") {
                console.log(`It's time for ${player.name} to play`);
                let actionFigth = true
                do {
                    actionFigth = true
                    console.log("");
                    console.log("########## Action ##########")
                    console.log("");
                    console.log("1 - Fight")
                    console.log("2 - Enemies Stats")
                    console.log("3 - My Stats")
                    console.log(`4 - ${player.specialAttack}`)
                    console.log("* - Kill You")
                    let playerAction = prompt(`${player.name}, choose your action`)
                    switch (playerAction) {

                        case "1":
                            this.oneTurn(player, this.characters);
                            break;

                        case "2":
                            console.log("");
                            console.log("########## Enemies Stats ##########")
                            console.log("");
                            this.game.watchStats(player, this.characters);
                            actionFigth = false;
                            break;

                        case "3":
                            console.log("");
                            console.log("########## My Stats ##########")
                            console.log("");
                            this.game.myStats(player);
                            actionFigth = false;
                            break;


                        case "4":
                            if (player.constructor.name === "Berzerker" || player.constructor.name === "Monk") {
                                player.specialActiveted = true;
                                player.special();
                                player.specialActiveted = false;
                                break;
                            } else {
                                player.specialActiveted = true;
                                this.oneTurn(player, this.characters);
                                player.specialActiveted = false;
                                break;
                            }

                        case "*":
                            player.status = "loser"
                            break;


                        default:
                            console.log("Choose a valid action");
                            actionFigth = false;
                    }
                }
                while (!actionFigth);
            }
        })

        console.clear();
    }

    oneTurn = (player, characters) => {
        console.log("");
        console.log("########## Choose your victim ##########")
        let victims = characters.filter(char => char !== player && char.status !== "loser")
        victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1} - ${victim.name}`))
        let isValid = true
        do {
            isValid = true
            let playerVictim = prompt(`${player.name}, choose your victim`)
            let victim = victims[parseInt(playerVictim) - 1]
            if (!victim) {
                console.log("Invalid choice, try again");
                isValid = false
            } else if (victim.status === 'loser') {
                console.log(`Sorry, ${victim.name} is already dead, choose another victim`);
                isValid = false
            } else if (player.specialActiveted === true) {
                player.special(victim)
            } else {
                player.dealDamage(victim)
            }
        }
        while (!isValid)
    }
}