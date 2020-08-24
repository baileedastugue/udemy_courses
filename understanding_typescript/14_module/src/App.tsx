import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';
import {v4 as uuidv4} from 'uuid';
import {Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, 
    {id: uuidv4(), text: text}]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
