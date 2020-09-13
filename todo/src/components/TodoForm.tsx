import React, { useRef, useEffect } from 'react';

declare var M: { updateTextFields(): void };

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => M?.updateTextFields(), []);


  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const value = inputRef.current!.value;
      if (value !== undefined && value !== null && /\S/.test(value)) {
        onAdd(value.trim());
        inputRef.current!.value = '';
      }
    }
  };
  
  return (
    <div className="input-field">
      <input
        ref={inputRef}
        onKeyPress={keyPressHandler}
        id="title"
        type="text"
      />
      <label htmlFor="title" className="active">Название дела</label>
    </div>
  );
};
