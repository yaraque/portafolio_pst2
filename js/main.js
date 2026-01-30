document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el botón y la lista de enlaces
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // 1. Abrir / Cerrar menú al tocar el icono
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Cambiar el icono visualmente (de Barras a X)
        const icon = menuToggle.querySelector('i');
        
        if (navLinks.classList.contains('active')) {
            // Si está abierto, pon la X
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            // Si está cerrado, pon las barras
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Cerrar menú automáticamente al elegir una opción
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                // Devolver el icono a su estado original
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
});