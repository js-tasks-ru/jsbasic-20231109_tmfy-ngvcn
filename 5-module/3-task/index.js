function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel__inner');
  const width = document.querySelector('.carousel__inner').offsetWidth;

  let offset = 0;
  tempWidth = 0;
  buttonLeft.style.display = 'none'

  buttonRight.onclick = function () {
    if (offset === 2) {
      buttonRight.style.display = 'none'
    } else {
      buttonLeft.style.display = ''
    }
    tempWidth -= width
    carousel.style.transform = `translateX(${(tempWidth)}px)`
    offset++;
  };

  buttonLeft.onclick = function () {
    if (offset === 1) {
      buttonLeft.style.display = 'none'
    } else {
      buttonRight.style.display = ''
    }
    tempWidth += width 
    carousel.style.transform = `translateX(${(tempWidth)}px)`;
    offset--;
  };
}
