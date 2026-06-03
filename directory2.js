document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdown = document.querySelector('.dropdown');
    const trigger = document.querySelector('.dropdown-trigger') || document.getElementById('dropdownBtn');
    const selectedValue = dropdown?.querySelector('.selected-value');
    const items = dropdown?.querySelectorAll('.dropdown-item');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('open');
        });
    }

    if (trigger && dropdown) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
    }

    items?.forEach(item => {
        item.addEventListener('click', function(e) {
            const link = this.querySelector('a');
            
            if (link) {
                const href = link.getAttribute('href');
                
                if (href && href !== '#') {
                    window.location.href = href;
                } else {
                    e.preventDefault();
                    dropdown.querySelector('.dropdown-item.active')?.classList.remove('active');
                    this.classList.add('active');
                    
                    if (selectedValue) {
                        selectedValue.textContent = link.textContent;
                    }
                    
                    dropdown.classList.remove('open');
                }
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (dropdown && dropdown.classList.contains('open') && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
        
        if (menuToggle && mainNav && mainNav.classList.contains('open') && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('open');
        }
    });
});