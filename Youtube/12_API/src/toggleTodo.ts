import { Handler } from "express";
import { db } from "./db";
import { ISuccessResponse } from "./types";

//toggleTodo/:id
export const toggleTodo: Handler = (req, res) => {
  const id = req.params.id;
  const todoIndex = db.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    db[todoIndex].isDone = !db[todoIndex].isDone;
  }
  return res.status(200).send({
    msg: `ID"si  ${id} olan basarili bir sekilde togglandi.`
  } as ISuccessResponse);
};
