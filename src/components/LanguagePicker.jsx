import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  `;

  const StyledButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.$isActive ? '#e6811e' : '#919191'};
    font-weight: ${props => props.$isActive ? '600' : '400'};
    cursor: pointer;
    padding: 4px 4px;
    transition: all 0.2s ease;

    &:hover {
      color: #e6811e;
    }
  `;

  const LastSpan = styled.span`
    width: 4px;
    height: 8px;
    background-color: white;
  `;

  return (
    <Container>
      <LastSpan />
      <StyledButton
        $isActive={i18n.language === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        {t('languagePicker.en')}
      </StyledButton>
      <LastSpan />
      <StyledButton
        $isActive={i18n.language === 'pt'}
        onClick={() => handleLanguageChange('pt')}
      >
        {t('languagePicker.pt')}
      </StyledButton>
      <LastSpan />
      <StyledButton
        $isActive={i18n.language === 'nl'}
        onClick={() => handleLanguageChange('nl')}
      >
        {t('languagePicker.nl')}
      </StyledButton>
      <LastSpan />
    </Container>
  );
};

export default LanguagePicker;