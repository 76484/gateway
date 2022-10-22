import axios from "axios";

export interface User {
  userId: string;
  libraryId: string;
  username: string;
}

// TODO: move to somewhere for re-use
export interface HttpError extends Error {
  code: number;
}

export default {
  getUsers: async (userIds: string[]) => {
    try {
      const { data: users } = await axios.get("http://localhost:3000/users", {
        params: {
          userId: userIds,
        },
      });

      return users as User[];
    } catch (err) {
      // TODO: log?
      const error = new Error("Failed to fetch users") as HttpError;

      error.code = 500;

      throw error;
    }
  },
};
