document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form reload

    let isValid = true;

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Reset error messages
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    // Name validation
    if (name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Enter
