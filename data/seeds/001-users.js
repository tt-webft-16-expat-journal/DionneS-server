exports.seed = function (knex, Promise) {
  return knex("users").insert([
    {
      username: "nunya",
      password: "bidness",
      email: "testing@123.com",
    },
    {
      username: "nun",
      password: "yayaaya",
      email: "bidness@123.com",
    },
  ]);
};
