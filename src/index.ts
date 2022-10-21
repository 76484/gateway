import express from "express";

import userService from "./services/userService";
import { transformUser } from "./transformers/user";

const app = express();
const port = 3001;

app.get("/", async (_req, res) => {
  const users = await userService.getUsers(["User1", "User2"]);
  const transformedUsers = users.map(transformUser);

  res.json({
    users: transformedUsers,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
