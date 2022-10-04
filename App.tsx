import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imageBaseUrl } from './const';
import i18n from './i18n';

import './style.css';

export default function App() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  function handleChange(event) {
    const lang = event.target.value;
    setLanguage(lang);

    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <header style={{ paddingBottom: '30px' }}>
        <img src={`${imageBaseUrl}/${language}.png`} width="40" height="40" />

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
      <footer>
        <p>{t('this is the footer')}</p>
      </footer>
    </div>
  );
}
