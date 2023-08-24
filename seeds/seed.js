// Import necessary modules and models
const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

// Import seed data from JSON files
const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');

// Function to seed the database with data
const seedDatabase = async () => {
  // Sync the database, forcing it to drop and recreate tables
  await sequelize.sync({ force: true });

  // Bulk create users with individual hooks
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Create posts and associate them with random users
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // Create comments and associate them with random users
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // Exit the process when seeding is complete
  process.exit(0);
};

// Call the seedDatabase function to initiate the seeding process
seedDatabase();