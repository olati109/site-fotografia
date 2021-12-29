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

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    'scroll',
    debounce(function () {
      animeScroll();
    }, 200),
  );
}
