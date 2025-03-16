document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobileMenuToggle');
    const mobileMenu = document.querySelector('.mobileMenu');
    const mobileMenuClose = document.querySelector('.mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobileMenuLink');
    
    if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.headerContainer');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.padding = '5px 0';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Location tabs
    const locationControls = document.querySelectorAll('.locationControl');
    const locationCards = document.querySelectorAll('.locationCard');
    
    if (locationControls.length && locationCards.length) {
        locationControls.forEach(control => {
            control.addEventListener('click', function() {
                const location = this.getAttribute('data-location');
                
                // Update active control
                locationControls.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                // Show selected location card
                locationCards.forEach(card => {
                    card.classList.remove('active');
                    if (card.id === location) {
                        card.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Form submission
    const franchiseForm = document.getElementById('franchiseForm');
    
    if (franchiseForm) {
        franchiseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(franchiseForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'phone', 'city'];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!formValues[field]) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Here you would normally send the data to your server
                alert('¡Gracias por tu interés! Te contactaremos pronto.');
                franchiseForm.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});