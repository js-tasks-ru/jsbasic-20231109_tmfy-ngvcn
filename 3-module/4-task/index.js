function showSalary(users, age) {
  res = '';
  for (i of users) {
    if (i.age <= age) {
      res += i.name + ", " + i.balance + '\n';
    }
  }
  res = res.replace(/\n$/m, '');

  return res;
}
