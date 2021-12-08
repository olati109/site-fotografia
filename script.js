const seleção = document.querySelectorAll('.nav a[href^="#"]');

seleção.forEach((item) => {
  item.addEventListener('click', andamento);
});

function andamento(event) {
  event.preventDefault();
  const element = event.target;
  const itens = element.getAttribute('href');
  const to = document.querySelector(itens).offsetTop;

  window.scroll({
    top: to,
    behavior: 'smooth',
  });
}

// let time = 2500,
//   currentImageIndex = 0,
//   images = document.querySelectorAll('#slider img');
// max = images.length;

// function nextImage() {
//   images[currentImageIndex].classList.remove('selected');

//   currentImageIndex++;

//   if (currentImageIndex >= max) currentImageIndex = 0;

//   images[currentImageIndex].classList.add('selected');
// }

// function start() {
//   setInterval(() => {
//     nextImage();
//   }, time);
// }

// window.addEventListener('load', start);
