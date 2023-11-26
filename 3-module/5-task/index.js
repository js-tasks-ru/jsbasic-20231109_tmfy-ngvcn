function getMinMax(str) {
  arr = str.split(' ');
  numarr = [];

  for (i of arr) {
    if (parseInt(i, 10)){
      numarr.push(parseFloat(i, 10));
    }
  }

  return {
    max: Math.max(...numarr),
    min: Math.min(...numarr)
  }
}


let res = getMinMax('1 и -5.8 или 10 хотя 34 + -5.3 и 73');