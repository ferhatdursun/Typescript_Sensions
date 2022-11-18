"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const app = (0, express_1.default)();
app.listen(4000, () => {
    console.log(chalk_1.default.green("server is up on http://localhost:4000"));
});
