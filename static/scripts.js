document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Replace this with actual database check
    if (email === "user@example.com" && password === "password") {
        window.location.href = 'main.html';
    } else if (email !== "user@example.com") {
        alert("User not found.");
    } else {
        alert("Wrong password.");
        document.getElementById('password').value = '';
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        // Replace this with actual database insert
        window.location.href = 'main.html';
    } else {
        alert("Passwords do not match.");
    }
});

function resetForm() {
    document.getElementById('signin-form').reset();
}

