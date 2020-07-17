function Toss_MatchWinners(matches) {
  const result = {};
  for (let match of matches) {
    const toss_winner = match.toss_winner;
    const winner = match.winner;
    if (winner == toss_winner) {
      if (result[winner]) {
        result[winner] += 1;
      } else {
        result[winner] = 1;
      }
    }
  }
  return result;
}
module.exports = Toss_MatchWinners;
