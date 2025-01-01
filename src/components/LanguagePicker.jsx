import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-picker-container">
      <button
        className={`language-button language-button-left ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        {t('languagePicker.en')}
      </button>
      <button
        className={`language-button ${i18n.language === 'pt' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pt')}
      >
        {t('languagePicker.pt')}
      </button>
      <button
        className={`language-button language-button-right ${i18n.language === 'nl' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('nl')}
      >
        {t('languagePicker.nl')}
      </button>
    </div>
  );
};

export default LanguagePicker;