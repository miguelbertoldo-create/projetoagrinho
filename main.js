document.addEventListener("DOMContentLoaded", () => {
    // Valores finais para a animação
    const targets = {
        trees: 15420,    // Exemplo: 15.420 árvores
        water: 2500000,  // Exemplo: 2.500.000 litros
        carbon: 850      // Exemplo: 850 toneladas
    };

    const animateCount = (id, targetValue) => {
        const element = document.getElementById(id);
        let startValue = 0;
        const duration = 2000; // Duração da animação em milissegundos (2 segundos)
        const stepTime = Math.abs(Math.floor(duration / targetValue));
        
        // Garante que o passo não seja zero e define uma velocidade fluida
        const increment = Math.ceil(targetValue / 100); 

        const counter = setInterval(() => {
            startValue += increment;
            if (startValue >= targetValue) {
                startValue = targetValue;
                clearInterval(counter);
            }
            
            // Formata o número para o padrão brasileiro (ex: 1.500 em vez de 1500)
            element.innerText = startValue.toLocaleString('pt-BR');
        }, 20);
    };

    // Executa a animação para cada contador
    animateCount("trees", targets.trees);
    animateCount("water", targets.water);
    animateCount("carbon", targets.carbon);
});