const Post = require('../models/Post');
exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getPostPage = (req, res) => {
  res.render('post');
};
exports.getUpdatePage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('update', {
    post,
  });
};
exports.getCratePostPage = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts: posts,
  });
};
exports.getSinglePostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('singleposts', {
    post,
  });
};
