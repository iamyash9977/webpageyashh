// script.js

document.getElementById("myForm").addEventListener("submit", function(event) {
    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById("country").value;

    // Basic form validation
    if (!name || !email || !gender || !country) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // Prevent the form from submitting
    } else {
        alert("Form submitted successfully!");
    }
});
