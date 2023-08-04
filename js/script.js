// Ativar link do menu

const links = document.querySelectorAll(".header-menu a");

function linkAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(linkAtivo);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarParametro(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
}

parametros.forEach(ativarParametro);

//Ativar perguntas

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de imagens

const imagens = document.querySelectorAll(".bicicleta-imagens img");
const galeria = document.querySelector(".bicicleta-imagens");

function trocarImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width:920px)").matches;
  if (media) {
    galeria.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

imagens.forEach(eventosGaleria);

//Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
