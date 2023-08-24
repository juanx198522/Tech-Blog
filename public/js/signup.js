// Function to handle user signup
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Get username and password values from input fields
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Check if both username and password are provided
  if (username && password) {
    // Send a POST request to create a new user
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If signup is successful, redirect to the dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Display an alert with the response status text if signup fails
      alert(response.statusText);
    }
  }
};

// Add a submit event listener to the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);