import { Request, Response,Handler } from "express";
//! Handler sayesinde (req:Request, res: Response) degil sadece = (req, res) yaziyoruz
import { ISuccessResponse, ITodoItem, ITodoRequestBody } from "./types";
import {db} from "./db"



export const getTodo: Handler = (req, res) => { //! Burada ki getTodo FireBlog projesinde ki gibi index.ts´ de cagriliyor.
    
    const body = req.body as ITodoRequestBody;

    const todoitem: ITodoItem = {
        isDone: false, //! Yapip yapmadigim, ilk olarak false. Cünkü bu todoyu eklerken yapmamis oluyorum.

        text: body.text,

        id: Math.random().toString()
    };
    db.push(todoitem);
    console.log(todoitem);
    
    const responseData: ISuccessResponse = {
        msg: "Es wurde erfolgreich eingefügt",
        payload: todoitem,
    }
    res.status(201).send(responseData)
}