"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addTodo_1 = require("./addTodo");
const getTodos_1 = require("./getTodos");
const deleteTodo_1 = require("./deleteTodo");
const toggleTodo_1 = require("./toggleTodo");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/add", addTodo_1.addTodo);
app.get("/todos", getTodos_1.getTodos);
app.delete("/delete/:id", deleteTodo_1.deleteTodo);
app.post("/toggleTodo/:id", toggleTodo_1.toggleTodo);
app.listen(4000, () => {
    console.log("server is up on http://localhost:4000");
});
