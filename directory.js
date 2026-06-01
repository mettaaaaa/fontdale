document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const trigger = document.getElementById('dropdownBtn');
    const selectedValue = dropdown.querySelector('.selected-value');
    const items = dropdown.querySelectorAll('.dropdown-item');

    trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    items.forEach(item => {
        item.addEventListener('click', function() {
            dropdown.querySelector('.dropdown-item.active').classList.remove('active');
            this.classList.add('active');
            
            selectedValue.textContent = this.textContent;
            dropdown.classList.remove('open');
            
            console.log("Filter Aktif:", this.getAttribute('data-value'));
        });
    });

    document.addEventListener('click', function() {
        dropdown.classList.remove('open');
    });
});