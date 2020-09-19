import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const TTranslate = () => {
  const { t, i18n } = useTranslation();
  const count = 1;
  const name = 'Alex';

  return (
    <>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <h2>{t('Welcome to React')}</h2>
      {/* <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
      </Trans> */}
    </>
  );
};
