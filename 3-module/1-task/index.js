function namify(users) {
  let res = [];
  for (i of users) {
    res.push(i.name);
  }
  return res;
}