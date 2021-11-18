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

// const imgs = document.getElementById('img');
// const img = document.querySelectorAll('#img img');

// let n = 0;

// function scroll() {
//   n++;
//   if (n > img.length - 1) {
//     n = 0;
//   }
//   imgs.style.transform = `translateX(${-n * 500}px)`;
// }

// setInterval(scroll, 1000);
