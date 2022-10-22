import type { Request, Response } from "express";

import { fetchUsers } from "../services/userService";
import { transformUser } from "../transformers/userTransformer";

export default async (_req: Request, res: Response) => {
  try {
    const users = await fetchUsers(["User1", "User2"]);
    const transformedUsers = users.map(transformUser);

    res.json({
      users: transformedUsers,
    });
  } catch (err) {
    // TODO: handle with middleware?
    if (err.code === 500) {
      res.sendStatus(502);
    }
  }
};
