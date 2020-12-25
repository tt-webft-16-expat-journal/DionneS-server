const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

const user = {
  username: "nunya",
  password: "bidness",
  email: "nunya@bidness.com"
};
const noPassword = {
  username: "the homies",
};
const noUser = {
  password: "bidness",
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

afterAll(async (done) => {
  await db.destroy();
  done();
});

test("sanity check", () => {
  expect(true).not.toBe(false);
  expect(2 + 2).toEqual(4)
});

describe("/register endpoint", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("Registers", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send(user);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("username");
    expect(response.body).toHaveProperty("password");
    expect(response.body).toHaveProperty("email");
  });
  it("Fails with a missing password", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send(noPassword);
    expect(response.body).toBe("username and password required");
  });
  it("Fails with a missing username", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send(noUser);
    expect(response.body).toBe("username and password required");
  });
});

describe("/login endpoint", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("Logs in with registered user", async () => {
    await request(server).post("/api/auth/register").send(user);
    const response = await request(server).post("/api/auth/login").send(user);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("token");
  });
  it("Will not log in an unregistered user", async () => {
    const response = await request(server).post("/api/auth/login").send(user);
    expect(response.body).toBe("invalid credentials");
  });
});

describe("/posts endpoint", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await request(server).post("/api/auth/register").send(user);
  });
  it("gives 200 status on success", async () => {
    const {
      body: { token },
    } = await request(server).post("/api/auth/login").send(user);
    const res = await request(server)
      .get("/api/posts")
      .set("Authorization", token);
    expect(res.status).toBe(200);
  });
  it("requires token", async () => {
    const response = await request(server).get("/api/posts");
    expect(response.body).toBe("token required");
  });
});
