function ucFirst(str) {
  if (str.length == 0) return str;
  str = str[0].toUpperCase() + str.substring(1);
  return str;
}