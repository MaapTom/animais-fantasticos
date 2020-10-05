import AnimaNumeros from './anima-numero.js';

export default function fetchAnimais(url, target) {

  // Cria a div contendo o total de informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  function preecherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch espera a resposta e trasnforma-a em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de JSON, ativa as funções 
      // para preecher e animar os numeros
      animaisJSON.forEach((animal) => {
        preecherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
