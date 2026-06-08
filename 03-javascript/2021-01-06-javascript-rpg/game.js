class Game {
  constructor() {
    console.clear();
    this.welcome();
    this.remainingTurns = 10;
    this.characters = new Array();
    this.initializeCharacters();
    this.characterSelection();
  }

  showChar() {
    this.characters.forEach((char) => console.log(char));
    console.log("\n")
  }

  characterSelection() {
    console.log("What character do you want to play ?");
    console.log("1 - Assassin (Carl)");
    console.log("2 - Berzerker (Draven)");
    console.log("3 - Fighter (Grace)");
    console.log("4 - Paladin (Ulder)");
    console.log("5 - Monk (Moana)");
    console.log("6 - Wizard (Khadgar)");
    console.log("7 - Necromancer (Kel'Thuzad)");
    let valid = false;
    do {
      let playerParams = prompt(
        "Enter your choice, number 1-7 to pick a class."
      );
      if (playerParams < 1 || playerParams > 7 || isNaN(playerParams)) {
        console.log("Not a valid entry");
      } else {
        valid = true;
        this.characters[playerParams - 1].player = "human";
      }
    } while (!valid);
  }

  initializeCharacters() {
    this.characters.push(
      new Assassin("Carl"),
      new Berzerker("Draven"),
      new Figher("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Wizard("Khadgar"),
      new Necromancer("Kel'Thuzad")
    );
    console.log(`${this.characters.length} challengers entered the arena !`);
  }

  endGame() {
    console.log("Game is over !");
  }

  currentTurn() {
    return 10 - this.remainingTurns;
  }

  showTurn() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`-> TURN ${this.currentTurn()}. FIGHT ! ( ఠൠఠ )ﾉ`);
  }

  watchStats() {
    console.log("")
    console.log("Characters currently alive :");
    this.aliveChars().forEach((character) => {
      console.log(character.stats());
    });
    console.log("")
  }

  aliveChars() {
    return this.characters.filter((char) => char.status === "playing");
  }

  isOngoing() {
    if (this.aliveChars().length > 1 && this.remainingTurns > 1) {
      return true;
    } else {
      return false;
    }
  }

  congratulateWinners() {
    this.aliveChars().forEach((winner) =>
      console.log(`${winner.name} won the game !`)
    );
    this.aliveChars().forEach((winner) => (winner.status = "winner"));
    console.log(`	
                        ____________
                      .~      ,   . ~.
                     /                \\
                    /      /~\\/~\\   ,  \\
                   |   .   \\    /   '   |
                   |         \\/         |
          XX       |   /~~\\       /~~\\  |       XX
        XX  X      | |  o  \\    /  o  | |      X  XX
      XX     X     |  \\____/    \\____/  |     X     XX
  XXXXX     XX      \\         /\\        ,/      XX     XXXXX
  X        XX%;;@    \\       /  \\     ,/      @%%;XX        X
  X       X  @%%;;@    |           ' |      @%%;;@  X       X
  X      X     @%%;;@  |.  ; ; ; ;  ,|    @%%;;@     X      X
  X    X        @%%;;@                  @%%;;@        X    X
  X   X          @%%;;@              @%%;;@          X   X
  X  X            @%%;;@          @%%;;@            X  X
  XX X             @%%;;@      @%%;;@             X XX
  XXX              @%%;;@   @%%;;@               XXX
                       

                  Made with ❤ by Martin Moradi`);
  }

  welcome() {
    console.log(`
           .------.
           /  ~ ~  \\,------.      ________
         ,'  ~ ~ ~  /  (❤)  \\   ,'        \\
       ,'          /.    ~ ~ \\ /           \\
     ,'           | ,'\\  ~ ~ ~ X       \\ \\  |
   ,'  ,'          -  -<       (        \\ \\  |
 ,'  ,'               (vv      \/\\   \\ \\   |  |
(__,'  ,'   /         (vv   ""    \\  \\  | |  |
  (__,'    /   /       vv   """    \\ |  / / /
      \\__,'   /  |     vv          / / / / /
          \\__/   / |  | \         / /,',','
             \\__/\_^  |  \       /,'',','|
                    -^.__>.____/  ' ,'   |
                            // //---'      |
          ===============(((((((=================
                                     | \\ \\ |
                                     / |  | \\
                                    / /  / \\ |
                                    .     |   |
                                      --------'
    `);
  }
}
