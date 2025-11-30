const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        if (!isActive) {
            item.classList.add('active');
        }
    });
});

//funcion para el footer
function openFAQFromHash() {
    const hash = window.location.hash;

    if (hash) {
        const targetItem = document.querySelector(hash);

        if (targetItem && targetItem.classList.contains('faq-item')) {
            faqItems.forEach(item => item.classList.remove('active'));
            targetItem.classList.add('active');

            setTimeout(() => {
                targetItem.scrollIntoView({
                    behavior: 'instant',
                    block: 'center'
                });
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    openFAQFromHash();
});

window.addEventListener('hashchange', () => {
    openFAQFromHash();
});