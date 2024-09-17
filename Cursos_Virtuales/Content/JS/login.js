document.addEventListener("DOMContentLoaded", function() {
    // Obtén el formulario
    const form = document.getElementById('login_form');
    
    // Agrega un event listener para el evento 'submit' del formulario
    form.addEventListener('submit', function(event) {
        // Muestra un mensaje de alerta
        alert('Inicio de sesión correcto');
        
        // Puedes prevenir el envío del formulario si necesitas (opcional)
        // event.preventDefault();
    });
});
