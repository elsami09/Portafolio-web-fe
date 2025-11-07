        // Smooth scroll para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


        // Cambiar estilo de navbar al hacer scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });



        document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // 🆔 UID (identificador único, opcional si deseas rastrear el formulario)
    const uid = Date.now(); // genera un UID único según la hora actual

    // 📋 Capturar datos del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // 📞 Tu número de WhatsApp (con código de país)
    const phoneNumber = "18498564309";

    // 🧩 Organizar mensaje
    const text = `
🆔 Formulario ID: ${uid}
👤 Nombre: ${name}
📧 Email: ${email}
💬 Mensaje: ${message}
    `;

    // 🔗 Crear enlace de WhatsApp con codificación
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // 🚀 Abrir WhatsApp en nueva pestaña
    window.open(url, "_blank");
});