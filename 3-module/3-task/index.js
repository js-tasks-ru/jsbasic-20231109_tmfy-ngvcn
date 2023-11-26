function camelize(str) {
  let arr = str.split('-')
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
  }
  res = ''
  for(i of arr) {
    res += i
  }
  return res;
}