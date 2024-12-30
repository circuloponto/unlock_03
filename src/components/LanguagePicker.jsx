import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguagePicker = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-picker">
      <button 
        onClick={() => changeLanguage('en')}
        style={{ 
          background: 'none',
          border: 'none',
          color: i18n.language === 'en' ? '#fff' : '#ccc',
          cursor: 'pointer',
          fontWeight: i18n.language === 'en' ? '700' : '400',
          background:i18n.language === 'en' ? 'rgb(230 129 30)' : 'transparent',
          padding:i18n.language === 'en' ? '2px 4px' : '0',
          borderRadius:i18n.language === 'en' ? '4px' : '0'
        }}
      >
        {t('languagePicker.en')}
      </button>
      <span style={{ color: '#ccc' }}>|</span>
      <button
        onClick={() => changeLanguage('pt')}
        style={{ 
          background: 'none',
          border: 'none',
          color: i18n.language === 'pt' ? '#fff' : '#ccc',
          cursor: 'pointer',
          fontWeight: i18n.language === 'pt' ? '700' : '400',
          background:i18n.language === 'pt' ? 'rgb(230 129 30)' : 'transparent',
          padding:i18n.language === 'pt' ? '2px 4px' : '0',
          borderRadius:i18n.language === 'pt' ? '4px' : '0'
        }}
      >
        {t('languagePicker.pt')}
      </button>
    </div>
  );
};

export default LanguagePicker;