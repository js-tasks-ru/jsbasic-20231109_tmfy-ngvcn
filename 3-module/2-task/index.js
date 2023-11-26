function filterRange(arr, a, b) {
  res = [];
  for(let i = 0; i < arr.length; i++) {
    if(a <= arr[i] && arr[i] <= b) res.push(i);
  }
  return res.sort(function(a, b) {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a == b) return 0;
  }
  );
}