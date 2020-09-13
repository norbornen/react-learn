import React, {useState, useContext, FormEventHandler} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form: React.FC = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    const trimedValue = value.trim();
    if (trimedValue) {
      firebase.addNote(trimedValue)
        .then(() => alert.show('Создана заметка!', 'success'))
        .catch(() => alert.show('Ошибка при создании заметки', 'danger'))
        .finally(() => setValue(''));
    } else {
      alert.show('Введите название заметки');
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Введите название заметки"
        />
      </div>
    </form>
  );
};
