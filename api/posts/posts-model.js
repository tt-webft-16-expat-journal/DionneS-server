const db = require("../data/db-config.js");

module.exports = {
  getAllPosts() {
    return db("posts");
  },

  findById(id) {
    return db("posts").where({ id: id }).first();
  },

  addPost(post) {
    return db("posts")
      .insert(post)
      .then((id) => {
        return db("posts").where({ id: id }).first();
      });
  },

  update(id, updates) {
    return db("posts").where({ id }).update(updates);
  },

  removePost(id) {
    return db("posts").where({ id: id }).delete();
  },
};
