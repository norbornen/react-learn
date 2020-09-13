// @ts-check
import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
  if (!links || links.length === 0) {
    return <p className="center">Ссылок пока нет</p>;
  }

  return (
    <>
      <h2>Ваши ссылки</h2>
      <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Оргининальная</th>
              <th>Сокращённая</th>
              <th>Клики</th>
              <th> </th>
          </tr>
        </thead>
        <tbody>
          { links.map((link, idx) => (
            <tr key={link._id}>
              <td>{ idx + 1 }</td>
              <td>{ link.from }</td>
              <td>{ link.to }</td>
              <td>{ link.clicks }</td>
              <td><Link to={`/detail/${link._id}`}>Открыть</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
