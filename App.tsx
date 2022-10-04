import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './style.css';

export default function App() {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  function handleChange(event) {
    setLanguage(event.target.value);

    i18n.changeLanguage('it');
  }

  return (
    <div>
      <h1>Hello</h1>
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
