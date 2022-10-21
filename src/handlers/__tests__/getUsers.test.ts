import getUsers from "../getUsers";

jest.mock("../../services/userService", () => ({
  __esModule: true,
  default: {
    getUsers: jest.fn().mockResolvedValue([
      {
        userId: "User3",
        libraryId: "Library1",
        username: "user_3",
      },
    ]),
  },
}));

describe("transformerUser", () => {
  it("should call res.json with transformed users array", async () => {
    const jsonMock = jest.fn();
    const res = {
      json: jsonMock,
    };

    await getUsers({}, res);

    expect(jsonMock).toHaveBeenLastCalledWith({
      users: [
        {
          userId: "User3",
          libraryId: "Library1",
          username: "user_3",
          profileUrl: "https://www.example.com/profile/User3",
        },
      ],
    });
  });
});
