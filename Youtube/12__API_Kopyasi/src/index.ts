import express from "express";
import { getTodo } from "./addTodo";
import { deleteTodo } from "./deleteTodo";
import { getTodos } from "./getTodos";
import { toggleTodo } from "./toggleTodo";
const app = express();

app.use(express.json())

app.post("/add", getTodo)

app.get("/todos", getTodos)

app.delete("/deleteTodo/:id", deleteTodo)

app.post("/toggleTodo/:id", toggleTodo)

app.listen(4000, () => {
    console.log("server is up on http://localhost:4000");
    
})