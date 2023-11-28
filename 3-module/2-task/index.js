function filterRange(arr, a, b) {
  return arr.filter(function (i) {
    if(a <= i && b >= i) return true;
    else return false;
  });
}
