const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json({
    user: {
      userId: "user1",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
