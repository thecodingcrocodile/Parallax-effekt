const images = document.getElementsByClassName('paralaxContainer');

const calculatePosition = image => {
  const windowHeight = window.innerHeight;
  const speed = image.dataset.speed ? image.dataset.speed : 1;
  const scroll = image.offsetTop - window.scrollY;
  let calculatedPosition = scroll / windowHeight * 100 * speed + (100 - 100 * speed ) / 2;
  if(image.dataset.invert) calculatedPosition = 100 - calculatedPosition;
  image.style.backgroundPositionY = `${calculatedPosition}%`;
}

for (var i = 0; i < images.length; i++) {
  images[i].style.backgroundImage = `url('${images[i].dataset.image}')`
  calculatePosition(images[i]);
}

const handleScroll = () => {
  for (var i = 0; i < images.length; i++) {
    calculatePosition(images[i]);
  }
}

window.addEventListener('scroll', handleScroll)