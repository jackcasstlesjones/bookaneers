const insertBook = require("../model/insert");
import { Request, Response } from "express";

const post = (req: Request, res: Response) => {
  const { userTitle, userAuthor } = req.body;
  console.log(userTitle, userAuthor);
  insertBook({ title: userTitle, author: userAuthor });
  res.status(201).json({ message: "Book inserted successfully." });
};

module.exports = { post };
