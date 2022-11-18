import { Handler, Request, Response } from "express";
import { db } from "./db";
import { ITodoItem, ITodoRequestBody, ISuccessResponse } from "./types";

export const addTodo: Handler = (req, res) => {
  const { text } = req.body as ITodoRequestBody;
  console.log(text);

  const todoitem: ITodoItem = {
    isDone: false,
    text,
    id: Math.random().toString(),
  };
  db.push(todoitem);
  const responseData: ISuccessResponse = {
    msg: "Basarili bir sekilde eklendi",
    payload: todoitem,
  }
  res.status(201).send(responseData);
};
