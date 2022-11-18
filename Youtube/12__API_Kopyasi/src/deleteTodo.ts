import { Handler } from "express";
import { db } from "./db";
import { ISuccessResponse } from "./types";



export const deleteTodo: Handler = (req, res) => {
    const id = req.params.id;

    const todoIndex = db.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        db.splice(todoIndex, 1) //! Bu todo indexden 1 tane sil!

    }

    return res.status(200).send({
        msg: `ID"si {${id}} olan basariyla silindi.`
    } as ISuccessResponse);
}