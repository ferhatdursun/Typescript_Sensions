import express from "express";
import { addTodo } from "./addTodo";
import { getTodos } from "./getTodos";
import {deleteTodo} from "./deleteTodo"
import { toggleTodo } from "./toggleTodo";
 

const app = express()

app.use(express.json())

app.post("/add", addTodo);

app.get("/todos", getTodos);

app.delete("/delete/:id", deleteTodo)

app.post("/toggleTodo/:id", toggleTodo)


app.listen(4000, () => {
    console.log("server is up on http://localhost:4000");
    
});