import React from "react";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <div className="App">
          <AppHeader />
          <SearchPanel />
          <TodoList />
    </div>
  );

};

export default App;
