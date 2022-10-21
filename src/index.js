import express from "express";

import userService from "./services/userService";

const app = express();
const port = 3001;

app.get("/", async (_req, res) => {
  const users = await userService.getUsers(["User1", "User2"]);

  res.json({
    users,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
