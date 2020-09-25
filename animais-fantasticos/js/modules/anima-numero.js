export default function initAnimanumero() {
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      // eslint-disable-next-line no-use-before-define
      observer.disconnect();
      // eslint-disable-next-line no-use-before-define
      animaNumero();
    }
  }
  function animaNumero() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  let observer;

  observer = new MutationObserver(handleMutation);

  const observeTarget = document.querySelector('.numeros');
  observer.observe(observeTarget, { attributes: true });
}
