import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TodoApp } from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>

);
