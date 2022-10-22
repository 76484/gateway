import nock from "nock";

import userService from "../userService";

nock("http://localhost:3000")
  .get("/users")
  .reply(200, [
    {
      userId: "User1",
      libraryId: "Library1",
      username: "user_one",
    },
    {
      userId: "User2",
      libraryId: "Library2",
      username: "user_two",
    },
  ]);

describe("getUsers", () => {
  it("should return the users from the api call", async () => {
    expect(await userService.getUsers([])).toEqual([
      {
        userId: "User1",
        libraryId: "Library1",
        username: "user_one",
      },
      {
        userId: "User2",
        libraryId: "Library2",
        username: "user_two",
      },
    ]);
  });
});
