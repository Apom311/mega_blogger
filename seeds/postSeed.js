const { Post } = require('../models');

const postData = [
  {
    title: 'SuperMan & Batman same person?!',
    post_content: 'Click here to find out!',
    user_id: 1,
  },
  {
    title: 'Dogs vs Cats, live and in color!',
    post_content: "You'll never believe what happens!",
    user_id: 2,
  },
  {
    title: 'Super Clickbait title goes down real bad?!',
    post_content: "You won't want to miss this!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
