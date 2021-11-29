import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
    return (
        <ul>
            <li> <TodoListItem label = "Drink cofee" /> </li>
            <li> <TodoListItem label = "Build awesoome App" /> </li>
        </ul>
    );
};

export default TodoList;