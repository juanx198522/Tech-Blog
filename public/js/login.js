// Function to handle form submission for user login
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get username and password values from the input fields
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check if both username and password are provided
  if (username && password) {
    // Send a POST request to the login API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If the login is successful, redirect to the dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Display an alert with the response status text if login fails
      alert(response.statusText);
    }
  }
};

// Add a submit event listener to the login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);