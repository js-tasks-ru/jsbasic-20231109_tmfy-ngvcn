function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.setAttribute('hidden', true);
  button.removeEventListener('click', hideSelf);
}
