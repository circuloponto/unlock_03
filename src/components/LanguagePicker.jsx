import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
// border-top: 3px solid white;
// border-bottom: 3px solid white;
  const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    width:auto;
    height: calc(var(--cell-size) * 0.5);
    top: calc(var(--cell-size) * 1.2);
    right: calc(var(--cell-size) * 3);
    position: fixed;
    z-index: 2000;
    pointer-events: auto;
  `;

  const StyledButton = styled.button`
    background: none;
   
    color: ${props => props.$isActive ? '#e6811e' : '#919191'};
    border: ${props => props.$isActive ? '3px solid white' : '2px solid #787b8c'};
    font-weight: ${props => props.$isActive ? '600' : '400'};
    cursor: pointer;
    padding: 0px 0px;
    width:  calc(var(--cell-size) *1);
    height:  calc(var(--cell-size) * 0.666);
    transition: all 0.2s ease;
    pointer-events: auto;

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
     {/*  <LastSpan /> */}
      <StyledButton
        style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '0' }}
        $isActive={i18n.language === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        {t('languagePicker.en')}
      </StyledButton>
     {/*  <LastSpan /> */}
      <StyledButton
        $isActive={i18n.language === 'pt'}
        onClick={() => handleLanguageChange('pt')}
      >
        {t('languagePicker.pt')}
      </StyledButton>
     {/*  <LastSpan /> */}
      <StyledButton
      style={{ borderTopRightRadius: '0', borderBottomRightRadius: '10px' }}
        $isActive={i18n.language === 'nl'}
        onClick={() => handleLanguageChange('nl')}
      >
        {t('languagePicker.nl')}
      </StyledButton>
     {/*  <LastSpan /> */}
    </Container>
  );
};

export default LanguagePicker;