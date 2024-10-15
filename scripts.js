document.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.getElementById("wrapper")

    ScrollReveal({
        reset: true,
        distance: '50px',
        duration: 800,
        delay: 100,
        opacity: 0.01,
    });

    ScrollReveal().reveal(wrapper, {origin: 'top', easing: 'ease-in-out' });
});
