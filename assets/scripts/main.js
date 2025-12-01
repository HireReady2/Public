// Cargar header y footer
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
        initializeMenu(); // Inicializar menú después de cargar el header
    });

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

// Función para inicializar el menú
function initializeMenu() {
    const btnToggle = document.getElementById('btn-toogle');
    const navMenu = document.getElementById('navMenu');
    const hasDropdown = document.querySelector('.has-dropdown');

    // Toggle menú hamburguesa
    if (btnToggle) {
        btnToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            btnToggle.classList.toggle('active');

            // Cambiar aria-label
            if (navMenu.classList.contains('active')) {
                btnToggle.setAttribute('aria-label', 'Cerrar Menú');
            } else {
                btnToggle.setAttribute('aria-label', 'Abrir Menú');
            }
        });
    }

    // Toggle dropdown en móvil
    if (hasDropdown) {
        const dropdownLink = hasDropdown.querySelector('a');

        dropdownLink.addEventListener('click', (e) => {
            // Solo prevenir default en móvil
            if (window.innerWidth <= 968) {
                e.preventDefault();
                hasDropdown.classList.toggle('active');
            }
        });
    }

    // Cerrar menú al hacer click en un enlace (excepto el dropdown)
    const navLinks = document.querySelectorAll('.nav-menu > li > a:not(.has-dropdown > a)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            btnToggle.classList.remove('active');
            btnToggle.setAttribute('aria-label', 'Abrir Menú');
        });
    });

    // Cerrar menú al hacer click en enlaces del dropdown
    const dropdownLinks = document.querySelectorAll('.dropdown a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            btnToggle.classList.remove('active');
            btnToggle.setAttribute('aria-label', 'Abrir Menú');
            if (hasDropdown) {
                hasDropdown.classList.remove('active');
            }
        });
    });

    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            btnToggle.classList.remove('active');
            btnToggle.setAttribute('aria-label', 'Abrir Menú');
            if (hasDropdown) {
                hasDropdown.classList.remove('active');
            }
        }
    });
}

// Smooth scroll para navegación
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#inicio') {
                if (href === '#inicio') {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Animación de entrada para cards (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a cards de planes y testimonios
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.plan-card, .testimonio-card, .control-card, .servicio-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Cerrar menú móvil al redimensionar ventana
let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
    const navMenu = document.getElementById('navMenu');
    const btnToggle = document.getElementById('btn-toogle');
    const hasDropdown = document.querySelector('.has-dropdown');

    if (window.innerWidth > 968 && windowWidth <= 968) {
        if (navMenu) navMenu.classList.remove('active');
        if (btnToggle) {
            btnToggle.classList.remove('active');
            btnToggle.setAttribute('aria-label', 'Abrir Menú');
        }
        if (hasDropdown) hasDropdown.classList.remove('active');
    }
    windowWidth = window.innerWidth;
});

// ========== MODAL DE INICIO DE SESIÓN ==========

const modalOverlay = document.getElementById('modalRegistro');
const closeModalBtn = document.getElementById('closeModal');
const btnAcceder = document.getElementById('btnAcceder');

if (btnAcceder) {
    btnAcceder.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquear scroll
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });
}


if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});