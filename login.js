
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with actual login logic
    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});