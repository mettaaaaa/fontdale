document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.subscription-card');
    const fullName = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameValue = fullName.value.trim();
  
        if (nameValue === "") {
            alert("Validation Failed: Full name is required.");
            fullName.focus();
            return;
        }
        if (nameValue.length < 3 || nameValue.length > 50) {
            alert("Validation Failed: Name must be between 3 and 50 characters.");
            fullName.focus();
            return;
        }
        const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '-";
        for (let i = 0; i < nameValue.length; i++) {
            if (!allowedChars.includes(nameValue[i])) {
                alert("Validation Failed: Name can only contain letters and spaces.");
                fullName.focus();
                return;
            }
        }

        const emailValue = email.value.trim();
        const atIndex = emailValue.indexOf('@');
        const lastAtIndex = emailValue.lastIndexOf('@');
        const dotIndex = emailValue.lastIndexOf('.');

        if (atIndex < 1 || atIndex !== lastAtIndex || dotIndex <= atIndex + 1 || dotIndex === emailValue.length - 1 || emailValue.includes(" ")) {
            alert("Invalid email format (Example: name@gmail.com).");
            email.focus();
            return;
        }

        const phoneValue = phone.value.trim();
        
        if (phoneValue.length < 9 || phoneValue.length > 15) {
            alert("Phone number must be between 9 and 15 digits.");
            phone.focus();
            return;
        }

        for (let i = 0; i < phoneValue.length; i++) {
            const char = phoneValue[i];
            
            if (i === 0 && char === '+') {
                continue;
            }
            if (char === ' ') {
                continue;
            }
            if (char < '0' || char > '9') {
                alert("Phone number can only contain digits.");
                phone.focus();
                return;
            }
        }

        const checkedTopics = document.querySelectorAll('input[name="topic"]:checked');
        
        if (checkedTopics.length === 0) {
            alert("You must select at least 1 topic.");
            return;
        }

        const selectedFrequency = document.querySelector('input[name="frequency"]:checked');
        
        if (!selectedFrequency) {
            alert("Please select a newsletter update frequency preference.");
            return;
        }
        
        alert("Subscription successful! Thank you for subscribing to FontDale.");
        window.location.href = 'confirmed.html';
    });
});