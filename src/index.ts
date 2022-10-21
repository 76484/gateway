import express from "express";

import getUsers from "./handlers/getUsers";

const app = express();
const port = 3001;

app.get("/", getUsers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
