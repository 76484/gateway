import axios from "axios";

import { HttpError } from "../utils/errors";

export interface User {
  userId: string;
  libraryId: string;
  username: string;
}

const fetchUsers = async (userIds: string[]) => {
  try {
    const { data: users } = await axios.get("http://localhost:3000/users", {
      params: {
        userId: userIds,
      },
    });

    return users as User[];
  } catch (err) {
    // TODO: log?
    // What errors can we get here?
    // 4xx?

    throw new HttpError("Failed to fetch users");
  }
};

export { fetchUsers, HttpError };
