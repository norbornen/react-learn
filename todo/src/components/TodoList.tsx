import React from 'react';
import { ITodo } from '../interfaces';

interface TodoListProps {
  todos: ITodo[];
  onRemove(id: number): void;
  onToggle(id: number): void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

  if (todos.length === 0) {
    return <p className="center">Пока дел нет..</p>;
  }

  const removeWrap = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul className="collection">
      {todos.map((todo) => (
        <li className="collection-item" key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
            <span className="black-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
            <span className="secondary-content">
              <i className="material-icons red-text" onClick={(ev) => removeWrap(ev, todo.id)}>delete</i>
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
