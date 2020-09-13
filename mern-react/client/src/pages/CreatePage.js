import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';

export const CreatePage = () => {
  const history = useHistory();
  const { request } = useHttp();
  const [ link, setLink ] = useState('');

  useEffect(() => {
    if (window.M) {
      window.M.updateTextFields();
    }
  }, []);

  const pressHandler = async (ev) => {
    if (ev.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link });
        if (data && data.link) {
          history.push(`/detail/${data.link._id}`);
        }
      } catch(e) {}
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>

        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            value={link}
            type="text"
            onChange={(ev) => setLink(ev.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Ссылка</label>
        </div>

      </div>
    </div>
  );
};
