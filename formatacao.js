/* Função Navbar Mobile */
function openNav() {
  const menuNav = document.getElementById("my-menu-nav");
  if (menuNav) {
    menuNav.style.width = "230px";
  }
}

function closeNav() {
  const menuNav = document.getElementById("my-menu-nav");
  if (menuNav) {
    menuNav.style.width = "0";
  }
}

window.addEventListener('resize', function() {
  const menuNav = document.getElementById("my-menu-nav");
  if (window.innerWidth > 880 && menuNav) { 
   
    menuNav.style.width = 'auto'; 
  }
});

/* Validação do Formulário */
const form = document.getElementById('agendamentoForm');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert("Agendamento realizado com sucesso!");
    }

    form.classList.add('was-validated');
  });
}

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.darkmode-toggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', null);
        }
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Formulário enviado com sucesso!');
            form.reset();
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Menu mobile premium com overlay
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
let overlay = null;
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        if (nav.classList.contains('open')) {
            overlay = document.createElement('div');
            overlay.className = 'nav-overlay';
            overlay.onclick = closeMenu;
            document.body.appendChild(overlay);
        } else {
            closeMenu();
        }
    });
    // Fecha ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}
function closeMenu() {
    nav.classList.remove('open');
    if (overlay) {
        overlay.remove();
        overlay = null;
    }
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
            el.classList.add('revealed');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
