document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            alert("¡Tu mensaje ha sido enviado con éxito!");

            form.reset();
        });
    }
});
