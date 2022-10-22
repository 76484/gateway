import type { Request, Response } from "express";

import userService from "../services/userService";
import { transformUser } from "../transformers/userTransformer";

export default async (_req: Request, res: Response) => {
  const users = await userService.getUsers(["User1", "User2"]);
  const transformedUsers = users.map(transformUser);

  res.json({
    users: transformedUsers,
  });
};
