// Função genérica para tocar os sons da tag audio
function playSound(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

// Constante que seleciona todos os itens com a classe '.tecla' e os guarda
const listaDeTeclas = document.querySelectorAll(".tecla");

// Estrutura de repetição - Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    playSound(idAudio);
  };

  //Adiciona uma classe ao pressionar as teclas enter e espaço no teclado
  tecla.onkeydown = function (evento) {
    if (evento.code === "enter" || evento.code === "Space")
      tecla.classList.add("ativa");
  };

  //Remove uma classe ao soltar os botões no teclado
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
