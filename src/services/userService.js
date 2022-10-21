import axios from "axios";

export default {
  getUsers: async (userIds) => {
    const { data: users } = await axios.get("http://localhost:3000/users", {
      params: {
        userId: userIds,
      },
    });

    return users;
  },
};
