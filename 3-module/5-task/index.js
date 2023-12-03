function getMinMax(str) {
  arr = str.split(' ').filter((x) => parseInt(x, 10)).map((x) => parseFloat(x, 10));

  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  }
}