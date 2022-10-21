import type { User } from "../services/userService";

interface TransformedUser extends User {
  profileUrl: string;
}

const transformUser = (user: User) => {
  return {
    ...user,
    profileUrl: `https://www.example.com/profile/${user.userId}`,
  } as TransformedUser;
};

export { transformUser };
