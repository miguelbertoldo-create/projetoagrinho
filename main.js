function animateValue(id, endValue, duration) {
    let startValue = 0;
    let increment = endValue / (duration / 20);

    const element = document.getElementById(id);

    const timer = setInterval(() => {
        startValue += increment;

        if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
        }

        element.textContent = Math.floor(startValue).toLocaleString("pt-BR");
    }, 20);
}

window.addEventListener("load", () => {
    animateValue("trees", 250000, 2000);
    animateValue("water", 5000000, 2500);
    animateValue("carbon", 12000, 3000);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});