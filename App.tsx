import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

import './style.css';

export default function App() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  function handleChange(event) {
    setLanguage(event.target.value);

    i18n.changeLanguage(event.target.value);
  }

  return (
    <div>
      <p>{language}</p>
      <h1>{t('Hello')}</h1>

      <select value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="el">greek</option>
      </select>
    </div>
  );
}
