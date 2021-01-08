# Expat Journal

## Back-End url https://expat-16.herokuapp.com

### Users

| data       | type                  | required |
| ---------- | --------------------- | -------- |
| id         | integer               | no       |
| email      | string                | yes      |
| username   | string                | yes      |
| password   | string                | yes      |

### Posts

| data             | type    | required |
| -----------      | ------- | -------- |
| id               | integer | no       |
| title            | string  | yes      |
| image url        | string  | yes      |
| story            | string  | no       |
| user_id          | integer | no       |

## End Points

### Authentication Routes

| Method | Endpoint         | Token Required | Description                                                                                                       |     |
| ------ | ----------   ------ | -------------- | ----------------------------------------------------------------------------------------------------------------- | --- |
| POST   | `/api/auth/register` | no             | Registers a new user <br> Required: email, username, and password. <br>Returns .... |
| POST   | `/api/auth/login`    | no             | Signs in user and returns a token.<br> Required: username and password.              |

### Posts Routes

| Method | Endpoint           | Token Required | Description                   |
| ------ | ------------------ | -------------- | ----------------------------- |
| GET    | `/api/posts`        | yes            | Returns all posts             |
| GET    | `/api/posts/:id`    | yes            | Returns a single post by id   |
| POST   | `/api/posts`        | yes            | Returns newly added post      |
| PUT    | `/api/posts/:id`    | yes            | Returns newly updated post    |
| DELETE | `/api/posts/:id`    | yes            | Deletes a single post         |
