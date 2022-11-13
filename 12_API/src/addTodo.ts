import { Handler, Request, Response } from "express";
import { db } from "./db";
import { TodoItem, TodoRequestBody, SuccessResponse } from "./types";

export const addTodo: Handler = (req, res) => {
  const { text } = req.body as TodoRequestBody;
  console.log(text);

  const todoitem: TodoItem = {
    isDone: false,
    text,
    id: Math.random().toString(),
  };
  db.push(todoitem);
  const responseData: SuccessResponse = {
    msg: "Basarili bir sekilde eklendi",
    payload: todoitem,
  }
  res.status(201).send(responseData);
};
