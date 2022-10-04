import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imageBaseUrl } from './const';
import i18n from './i18n';

import './style.css';

export default function App() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  // const baseUrl =
  //   'https://stackblitz.com/files/react-ts-w3d2sq/github/simonesanna1983/react-i18next/main';

  function handleChange(event) {
    const lang = event.target.value;
    setLanguage(lang);

    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <header style={{ paddingBottom: '30px' }}>
        <img src={`${imageBaseUrl}/${language}.png`} width="50" height="60" />

        <select
          style={{ float: 'right' }}
          value={language}
          onChange={handleChange}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="el">greek</option>
        </select>
      </header>

      <section>
        <h1>{t('Hello')}</h1>
      </section>
    </div>
  );
}
