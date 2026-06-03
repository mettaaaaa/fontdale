const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('open');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(item => item.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('open');
        }
    });
});

const subscriptionForm = document.querySelector('.subscription-card');

if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const fullNameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const checkedTopics = document.querySelectorAll('input[name="topic"]:checked');

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (fullName === "" || email === "" || phone === "") {
            alert("Please fill out all required fields (*)");
            return; 
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert("Please enter a valid email address (e.g., name@example.com)");
            emailInput.focus();
            return;
        }

        if (checkedTopics.length === 0) {
            alert("Please select at least 1 Topic of Interest.");
            return;
        }
        if (checkedTopics.length > 5) {
            alert("You can select a maximum of 5 topics.");
            return;
        }

        alert("Thank you! You have successfully subscribed to FontDale newsletter.");
        window.location.href = 'confirmed.html'; 
    });
}