import axios from "axios";

export interface User {
  userId: string;
  libraryId: string;
  username: string;
}

export default {
  getUsers: async (userIds: string[]) => {
    const { data: users } = await axios.get("http://localhost:3000/users", {
      params: {
        userId: userIds,
      },
    });

    return users as User[];
  },
};
