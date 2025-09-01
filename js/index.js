// index.js - Comportamentos exclusivos da página inicial
// Este controla o carrossel de depoimentos da página principal.
document.addEventListener('DOMContentLoaded', () => {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('#testimonials-track > div');
    const totalTestimonials = testimonials.length;
    const track = document.getElementById('testimonials-track');

    /**
     * Exibe o depoimento no índice fornecido movendo a trilha
     * horizontalmente via transformação CSS.
     * @param {number} index - índice do depoimento a ser exibido
     */
    function showTestimonial(index) {
        const translateX = -index * 100;
        track.style.transform = `translateX(${translateX}%)`;
    }

    // Botão para avançar para o próximo depoimento
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        });
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            showTestimonial(currentTestimonial);
        });
    }

    // Avanço automático a cada 5 segundos
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
});