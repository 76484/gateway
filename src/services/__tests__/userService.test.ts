import nock from "nock";

import { fetchUsers } from "../userService";

describe("getUsers", () => {
  it("should return the users from the api call", async () => {
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

    expect(await fetchUsers([])).toEqual([
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

  it("should handle source server error", async () => {
    nock("http://localhost:3000").get("/users").reply(500);

    expect.assertions(1);

    return expect(fetchUsers([])).rejects.toEqual(
      expect.objectContaining({ code: 500 })
    );
  });
});
