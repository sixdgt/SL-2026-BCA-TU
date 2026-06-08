const form = document.getElementById('login');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if(password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        message.classList.remove('success'); // existing success class removed if any
        message.classList.add('error');
        return;
    } 

    if (firstName && lastName && email && password) {
        message.textContent = `Welcome, ${firstName} ${lastName}! Your registration is successful.`;
        message.classList.remove('error'); // existing error class removed if any
        message.classList.add('success'); // success class added for styling
        form.reset(); // Clear the form after successful submission
    } else {
        message.textContent = 'Please fill in all fields.';
        message.classList.remove('success'); // existing success class removed if any
        message.classList.add('error');
    }
});