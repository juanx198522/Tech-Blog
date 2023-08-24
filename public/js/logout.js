// Function to handle user logout
const logout = async () => {
  // Send a POST request to the logout API endpoint
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // If logout is successful, redirect to the home page
  if (response.ok) {
    document.location.replace('/');
  } else {
    // Display an alert with the response status text if logout fails
    alert(response.statusText);
  }
};

// Add a click event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);