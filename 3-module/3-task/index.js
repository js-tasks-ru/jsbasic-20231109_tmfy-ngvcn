function camelize(str) {
  let arr1 = str.split('-')
  let arrRes = arr1.filter((x) => x.length > 0).map((x) => x[0].toUpperCase() + x.slice(1)).join('');
  if (arr1[0].length > 0) { return arrRes[0].toLowerCase() + arrRes.slice(1); }
  else { return arrRes; }
}
