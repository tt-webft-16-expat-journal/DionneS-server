exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 128).notNullable();
      tbl.string("email", 128).notNullable().unique();
    })
    .createTable("posts", (tbl) => {
      tbl.increments();
      tbl.string("title", 128).notNullable().unique();
      tbl.string("story", 128);
      tbl.string("image_url", 128).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts").dropTableIfExists("users");
};
