// Function to handle creating a new comment
const newComment = async (event) => {
    event.preventDefault();

    // Extract the post ID from the URL
    const post_id = parseInt(window.location.pathname.split('/').pop());

    // Get the comment content from the input field
    const content = document.querySelector('#new-comment').value.trim();
    
    // Check if the content is not empty
    if (content) {
        // Send a POST request to create the comment
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If the request is successful, reload the page
        if (response.ok) {
            document.location.reload();
        } else {
            // Log and display an error message if the request fails
            console.log('Response status:', response.status);
            console.log('Response text:', await response.text());
            alert('Failed to create a comment');
        }
    }
};

// Get the new comment form element
const newCommentForm = document.querySelector('.new-comment-form');

// Add an event listener to the form to handle comment submission
newCommentForm.addEventListener('submit', newComment);
