// Import required modules and middleware
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Define a route for handling POST requests
router.post("/", withAuth, async (req, res) => {
  try {
    // Create a new comment using the Comment model, including user_id from the session
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Send a JSON response with the new comment and a 200 status code
    res.status(200).json(newComment);
  } catch (err) {
    // Handle errors by sending a JSON response with the error and a 400 status code
    res.status(400).json(err);
  }
});

// Export the router for use in other parts of the application
module.exports = router;