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
