import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;