module.exports = {
  validatePost,
};

function validatePost(req, res, next) {
  if (!req.body.title || !req.body.image) {
    res.status(401).json("title and image required");
  } else {
    next();
  }
}
