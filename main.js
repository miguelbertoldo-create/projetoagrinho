function mostrarMensagem() {
    document.getElementById("mensagem").innerText =
        "Produzir mais e preservar o meio ambiente é o caminho para um futuro sustentável.";
}

let valor = 0;
const alvo = 5000;

const intervalo = setInterval(() => {
    valor += 50;

    document.getElementById("contador").innerText =
        valor.toLocaleString("pt-BR");

    if (valor >= alvo) {
        clearInterval(intervalo);
    }
}, 20);