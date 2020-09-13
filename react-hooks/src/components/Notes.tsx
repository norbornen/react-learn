import React from 'react';
import { INote } from '../interfaces';

export const Notes: React.FC<{ notes: INote[], onRemove(id: string): Promise<void> }> = ({ notes, onRemove }) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  const intl = new Intl.DateTimeFormat('ru-RU', options);

  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li className="list-group-item" key={note.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong style={{ marginRight: '1rem' }}>{note.title}</strong>
            <small>{ intl.format(Date.parse(note.date)) }</small>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(note.id)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
