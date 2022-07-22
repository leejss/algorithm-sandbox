function nonConstructibleChange(coins) {
  // This funtion should be pure
  // Find minimum non constructible coins
  if (coins.length === 1) return coins[0];
  let clone = [...coins].sort();

  // constructible coins

  // Largest constructible value + 1
  // or Largest value - minimum value

  // What pattern ?
  if (clone[clone.length - 1] - clone[clone.length - 2] > 2) {
    if (clone[0] % 2 === 0) {
      return 1;
    } else {
      return clone[clone.length - 1] - clone[0];
    }
  }
  return clone[clone.length - 1] + clone[clone.length - 2];
}

module.exports = nonConstructibleChange;
