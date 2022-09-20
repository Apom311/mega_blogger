const { Comment } = require('../models');

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_content: "You can't be serious",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_content: 'I was There!!',
  },
  {
    user_id: 1,
    post_id: 3,
    comment_content: 'You would post this...',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
