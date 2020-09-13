import React, { useState, useCallback, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const rawTodos = localStorage.getItem('todos');
    if (rawTodos) {
      try {
        setTodos(JSON.parse(rawTodos));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ]);


  const addHandler = useCallback((title: string) => {
    setTodos((prev) => [{ title, id: Date.now(), completed: false }, ...prev]);
  }, []);

  const toggleHandler = useCallback((id: number) => {
    setTodos((prev) => {
      return prev.map((x) => {
        if (x.id === id) {
          return { ...x, completed: !x.completed };
        }
        return x;
      });
    })
  }, []);

  const removeHandler = useCallback((id: number) => {
    const allowRemove = confirm('Уверены, что хотите удалить задачу?');
    if (allowRemove) {
      setTodos((prev) => prev.filter((x) => x.id !== id));
    }
  }, []);


  return (
    <>
      <div className="mt4">
        <TodoForm onAdd={addHandler} />
      </div>
      <div className="mt4">
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};
