export function getIntegerNumber(num) {
  return Math.floor(num);
}

export function getDecimalNumber(num, decimals) {
  const absNum = Math.abs(num);
  return (absNum - Math.floor(absNum)).toFixed(decimals);
}
