import type { Request, Response } from "express";

import userService from "../../services/userService";
import type { HttpError } from "../../services/userService";
import getUsers from "../getUsers";

jest.mock("../../services/userService", () => ({
  __esModule: true,
  default: {
    getUsers: jest.fn(),
  },
}));

describe("transformerUser", () => {
  const jsonMock = jest.fn();
  const sendStatusMock = jest.fn();
  const res = {
    json: jsonMock,
    sendStatus: sendStatusMock,
  } as unknown as Response;

  it("should call res.json with transformed users array", async () => {
    (userService.getUsers as jest.MockedFunction<any>).mockResolvedValue([
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
    // TODO: constructor for HttpError
    const httpError = new Error("Failed to fetch users") as HttpError;
    httpError.code = 500;

    (userService.getUsers as jest.MockedFunction<any>).mockRejectedValue(
      httpError
    );

    await getUsers({} as Request, res);

    expect(sendStatusMock).toHaveBeenLastCalledWith(502);
  });
});
