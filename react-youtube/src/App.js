// @ts-check
import React, { useState, useEffect, lazy } from 'react';
import Context from './context';
import TodoList from './Todo/TodoList';
// import AddTodo from './Todo/AddTodo';
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddTodo = lazy(() => import('./Todo/AddTodo'));

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then((response) => response.json())
      .then((todos) => new Promise((resolve) => {
        setTimeout(() => resolve(todos), 2000);
      }))
      .then((todos) => setTodos(todos))
      .finally(() => setLoading(false));
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((item) => item.id !== id)
    );
  };

  const addTodo = (title) => {
    setTodos(todos.concat({ id: Date.now(), title, completed: false }))
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />
        <React.Suspense fallback={<p>loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        { loading && <Loader /> }
        { todos && todos.length > 0 ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : loading ? null : <p>No todos</p> }
      </div>
    </Context.Provider>
  );
}

export default App;
