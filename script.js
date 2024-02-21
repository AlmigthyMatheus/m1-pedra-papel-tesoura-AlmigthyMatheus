function playRockPaperScissor(player1, player2) {
  const pedra = "Pedra";
  const papel = "Papel";
  const tesoura = "Tesoura";

  if (
    (player1 === pedra && player2 === papel) ||
    (player1 === papel && player2 === tesoura) ||
    (player1 === tesoura && player2 === pedra)
  ) {
    return "Jogador 2 venceu!";
  } else if (
    (player2 === pedra && player1 === papel) ||
    (player2 === tesoura && player1 === pedra) ||
    (player2 === papel && player1 === tesoura)
  ) {
    return "Jogador 1 venceu!";
  }

  return "Empate!";
}
