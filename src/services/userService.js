const axios = require("axios");

module.exports = {
  getUsers: async (userIds) => {
    const { data: users } = await axios.get("http://localhost:3000/users", {
      params: {
        userId: userIds,
      },
    });

    return users;
  },
};
