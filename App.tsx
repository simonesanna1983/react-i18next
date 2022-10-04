import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Hello</h1>
      <h1>{t('Hello')}</h1>
    </div>
  );
}
