function shufflePlayers(playersArray: string[]) {
  const shuffledPlayers = playersArray.sort(() => 0.5 - Math.random());
  return shuffledPlayers;
}

export default shufflePlayers