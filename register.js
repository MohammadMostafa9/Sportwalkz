function toggleForm(formId) {
    const form = document.getElementById(formId);
    const otherForms = document.querySelectorAll('div[id^="Form"]:not(#' + formId + ')');

    form.style.display = 'block';

    otherForms.forEach((otherForm) => {
        otherForm.style.display = 'none';
    });
}

function login() {
    // Your login validation and submission logic here
    alert("Logging in..."); // Replace with your logic
    return false; // Prevent form submission for this example
}

function register() {
    // Your registration validation and submission logic here
    alert("Registering..."); // Replace with your logic
    return false; // Prevent form submission for this example
}