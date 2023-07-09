export function calculateScore(breakdown: number[]) {
  const weights = [30, 20, 20, 15, 10, 5];

  const totalScore = breakdown.reduce((acc, score, idx) => {
    const weight = weights[idx] as number;
    const calculatedScore =
      idx === 4
        ? Math.ceil(Math.abs(score - 3 / 3) * weight)
        : (score / 5) * weight;
    return acc + calculatedScore;
  }, 0);

  return totalScore;
}
