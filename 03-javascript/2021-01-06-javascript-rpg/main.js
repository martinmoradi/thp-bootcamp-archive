mainGame = () => { 
  console.log("⚔ A Perruche RPG story ⚔");
  const playingGame = new Game();

  while (playingGame.isOngoing() == true) {
    playingGame.remainingTurns -= 1;
    playingGame.showTurn();
    new Turn(playingGame.aliveChars(), playingGame);
    playingGame.watchStats();
  }
  playingGame.endGame();
  playingGame.congratulateWinners();
}

const launchButton = document.getElementById("launchButton")
launchButton.addEventListener("click", mainGame)