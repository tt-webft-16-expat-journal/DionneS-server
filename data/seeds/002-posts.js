exports.seed = function (knex, Promise) {
  return knex("posts").insert([
    {
      title: "testing1",
      story: "blablabla",
      image_url:
        "testing@123.comhttps://user-interface-ii-5fl9n5s96.vercel.app/images/art/splnd%20wren.jpg",
    },
    {
      title: "testing2",
      story: "blablabla",
      image_url:
        "testing@123.comhttps://user-interface-ii-5fl9n5s96.vercel.app/images/art/splnd%20wren.jpg",
    },
  ]);
};
