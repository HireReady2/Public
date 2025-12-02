// Cerrar modal desde dentro del iframe (comunicación con el parent)
const closeBtn = document.querySelector('.close-btn');

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        // Comunicar al parent para cerrar el modal
        window.parent.postMessage('closeModal', '*');
    });
}


const googleSignin = document.querySelector('.google-signin');

googleSignin.addEventListener('click', () => {
    console.log('Iniciando sesión con Google...');
    // Aquí implementarías la lógica de autenticación con Google
    alert('Función de inicio de sesión con Google');
    // Ejemplo: window.location.href = '/auth/google';
});


const userCard = document.querySelector('.user-card');

userCard.addEventListener('click', () => {
    console.log('Seleccionando cuenta de usuario...');
    // Aquí implementarías la lógica para seleccionar esta cuenta
    alert('Iniciando sesión como User@google.com');
});


const continueBtn = document.querySelector('.continue-btn');

continueBtn.addEventListener('click', () => {
    console.log('Continuando como invitado...');

    alert('Accediendo como invitado');

    window.parent.postMessage('closeModal', '*');
});

const interactiveElements = document.querySelectorAll('.google-signin, .user-card, .continue-btn');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

const disclaimerLinks = document.querySelectorAll('.disclaimer a');

disclaimerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Abriendo:', link.textContent);
        // Aquí abrirías las páginas de términos o privacidad
        alert(`Abriendo ${link.textContent}`);
    });
});