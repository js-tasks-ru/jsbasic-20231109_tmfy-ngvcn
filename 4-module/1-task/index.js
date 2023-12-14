function makeFriendsList(friends) {
  let obj = document.createElement('ul');
  friends.map((i) => {
      let child = document.createElement("li");
      child.innerHTML = `${i.firstName} ${i.lastName}`;
      obj.appendChild(child);
  })
  return obj;
}
