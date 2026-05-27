/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

/* =========================
   SCROLL SUAVE
========================= */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const elementos = document.querySelectorAll(
  ".card, .sobre-texto, .imagens img, .estatistica"
);

function mostrarElementos() {
  const alturaTela = window.innerHeight;

  elementos.forEach(elemento => {
    const distanciaTopo = elemento.getBoundingClientRect().top;

    if (distanciaTopo < alturaTela - 100) {
      elemento.classList.add("mostrar");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

/* =========================
   CONTADOR DAS ESTATÍSTICAS
========================= */

const numeros = document.querySelectorAll(".contador");

function iniciarContador() {
  numeros.forEach(numero => {
    const alvo = +numero.getAttribute("data-target");
    let atual = 0;

    const incremento = alvo / 100;

    function atualizarNumero() {
      atual += incremento;

      if (atual < alvo) {
        numero.innerText = Math.floor(atual);
        requestAnimationFrame(atualizarNumero);
      } else {
        numero.innerText = alvo;
      }
    }

    atualizarNumero();
  });
}

let contadorIniciado = false;

window.addEventListener("scroll", () => {
  const secao = document.querySelector(".estatisticas");

  if (secao) {
    const posicao = secao.getBoundingClientRect().top;

    if (posicao < window.innerHeight && !contadorIniciado) {
      iniciarContador();
      contadorIniciado = true;
    }
  }
});

/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.classList.add("topo-btn");

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   ESTILO DO BOTÃO TOPO
========================= */

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px 20px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#2e7d32";
botaoTopo.style.color = "white";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
botaoTopo.style.transition = "0.3s";

botaoTopo.addEventListener("mouseover", () => {
  botaoTopo.style.background = "#1b5e20";
});

botaoTopo.addEventListener("mouseout", () => {
  botaoTopo.style.background = "#2e7d32";
});

/* =========================
   FORMULÁRIO
========================= */

const formulario = document.querySelector("form");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector("textarea").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
  });
}