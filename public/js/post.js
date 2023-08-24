// Function to handle creating a new post
const newPost = async (event) => {
  event.preventDefault();

  // Get title and content values from input fields
  const title = document.querySelector('#new-post-title').value.trim();
  const content = document.querySelector('#new-post-content').value.trim();

  // Check if both title and content are provided
  if (title && content) {
    // Send a POST request to create the new post
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If the request is successful, redirect to the dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Display an alert if post creation fails
      alert('Failed to create a new post');
    }
  }
};

// Get the new post form element and add a submit event listener
const newPostForm = document.querySelector('.new-post-form');
if (newPostForm) {
  newPostForm.addEventListener('submit', newPost);
}