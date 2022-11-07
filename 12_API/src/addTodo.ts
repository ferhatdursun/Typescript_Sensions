import {Handler, Request, Response} from "express";
import { db } from "./db";
import {TodoItem, TodoRequestBody, SuccessResponse} from "./types";



export const addTodo: Handler = (req, res) => {

    const body = req.body as TodoRequestBody;

    const todoitem: TodoItem = {
        isDone: false,
        text: body.text,
        id: Math.random().toString()
    }
    db.push(todoitem);
    res.status(200).send({
        msg: "Basarili bir sekilde eklendi"
    } as SuccessResponse);
}