// Define an asynchronous function to handle the deletion of a post.
const deletePost = async () => {
  return; // Placeholder function, currently does nothing.
};

// Define an asynchronous event handler function for when a delete button is clicked.
const deletePostHandler = async (event) => {
  // Extract the post ID from the data attribute of the clicked element.
  const post_id = event.target.getAttribute("data-post-id");

  // Send a DELETE request to the API endpoint for deleting the post.
  await fetch(`/api/post/${post_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  // Redirect the user to the dashboard after the post is deleted.
  document.location.replace("/dashboard");
};

// Get all elements with the "delete-post" class.
const deletebuttons = document.getElementsByClassName("delete-post");

// Add a click event listener to each "delete-post" element.
for (let index = 0; index < deletebuttons.length; index++) {
  deletebuttons[index].addEventListener("click", deletePostHandler);
}