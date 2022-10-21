import type { User } from "../../services/userService";
import { transformUser } from "../userTransformer";

const mockUser: User = {
  userId: "MockUser1",
  libraryId: "Library1",
  username: "mock_user",
};

describe("transformerUser", () => {
  it("should add a profileUrl", () => {
    expect(transformUser(mockUser)).toHaveProperty(
      "profileUrl",
      "https://www.example.com/profile/MockUser1"
    );
  });
});
