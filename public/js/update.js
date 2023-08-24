// Get the post ID from the current URL
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// Function to handle updating a post
const updatePost = async (event) => {
  event.preventDefault();

  // Get title and content values from input fields
  const title = document.querySelector('#update-post-title').value.trim();
  const content = document.querySelector('#update-post-content').value.trim();

  // Check if both title and content are provided
  if (title && content) {
    // Send a PUT request to update the post by its ID
    const response = await fetch(`/api/post/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    // If the request is successful, redirect to the dashboard
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      // Display an alert if the update fails
      alert("Failed to update");
    }
  }
};

// Get the update post button and add a click event listener
const updatePostButton = document.querySelector('#update-post');
updatePostButton.addEventListener("click", updatePost);