import type { Request, Response } from "express";

import { fetchUsers } from "../../services/userService";
import { HttpError } from "../../utils/errors";
import getUsers from "../getUsers";

jest.mock("../../services/userService", () => ({
  __esModule: true,
  fetchUsers: jest.fn(),
}));

describe("transformerUser", () => {
  const jsonMock = jest.fn();
  const sendStatusMock = jest.fn();
  const res = {
    json: jsonMock,
    sendStatus: sendStatusMock,
  } as unknown as Response;

  it("should call res.json with transformed users array", async () => {
    (fetchUsers as jest.MockedFunction<any>).mockResolvedValue([
      {
        userId: "User3",
        libraryId: "Library1",
        username: "user_3",
      },
    ]);

    await getUsers({} as Request, res);

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

  it("should handle 500 error from user service", async () => {
    (fetchUsers as jest.MockedFunction<any>).mockRejectedValue(
      new HttpError("Failed to fetch users")
    );

    await getUsers({} as Request, res);

    expect(sendStatusMock).toHaveBeenLastCalledWith(502);
  });
});
