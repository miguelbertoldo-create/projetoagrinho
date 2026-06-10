document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÃO DOS CONTADORES
    const targets = {
        trees: 18450,     /* Alvo de árvores */
        water: 3200000,   /* Alvo de litros de água */
        carbon: 1250      /* Alvo de CO2 em toneladas */
    };

    const animateCount = (id, targetValue) => {
        const element = document.getElementById(id);
        if (!element) return;

        let startValue = 0;
        const duration = 2500; // Tempo total da animação (2.5 segundos)
        const frameRate = 1000 / 60; // 60 frames por segundo
        const totalFrames = Math.round(duration / frameRate);
        const increment = targetValue / totalFrames;
        let currentFrame = 0;

        const counter = setInterval(() => {
            currentFrame++;
            startValue += increment;

            if (currentFrame >= totalFrames) {
                element.innerText = targetValue.toLocaleString('pt-BR');
                clearInterval(counter);
            } else {
                element.innerText = Math.floor(startValue).toLocaleString('pt-BR');
            }
        }, frameRate);
    };

    // Inicializa a contagem automatizada
    animateCount("trees", targets.trees);
    animateCount("water", targets.water);
    animateCount("carbon", targets.carbon);

    // 2. INTERCEPTAÇÃO E TRATAMENTO DO FORMULÁRIO DE CONTATO
    const form = document.getElementById("agroForm");
    const feedback = document.getElementById("formFeedback");

    if (form && feedback) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita o recarregamento da página

            // Captura de valores inseridos
            const nome = document.getElementById("nome").value;

            // Simulação de envio bem-sucedido
            feedback.classList.remove("hidden");
            feedback.classList.add("success");
            feedback.innerText = `Obrigado pelo contato, ${nome}! Nossa equipe de engenharia agronômica responderá em breve.`;

            // Limpa o formulário após o envio
            form.reset();

            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                feedback.classList.add("hidden");
                feedback.classList.remove("success");
            }, 5000);
        });
    }
});