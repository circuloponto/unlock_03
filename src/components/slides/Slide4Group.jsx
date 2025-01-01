import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import BaseSlideSection, { SlideText as BaseSlideText } from './SlideSection';

const Slide4Section = styled(BaseSlideSection)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(var(--cell-size) * 4);
  padding-bottom: calc(var(--cell-size) * 5);
  padding-left: calc(var(--cell-size) * 3);
  padding-right: calc(var(--cell-size) * 3);
  box-sizing: border-box;
`;

const Slide4Text = styled(BaseSlideText)`
  width: calc(var(--cell-size) * 18);
  min-width: calc(var(--cell-size) * 18);
  height: calc(100vh - calc(var(--cell-size) * 4) - 200px);
  display: block;
  background: #e6811e17;
  display: flex;
  flex-direction: row;
  gap: calc(var(--cell-size) * 2);
  padding: calc(var(--cell-size) * 1);
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  
  @media (max-width: 645px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 500px) {
    height: calc(100vh - calc(var(--cell-size) * 4) - 150px);
  }

  h3 {
    text-indent: 30px;
    text-align: justify;
    font-size: clamp(4px, 1vw + 0.6rem, 16px);
    line-height: 1.5;
    color: #616379;
    font-weight: 360;
    margin: 0;
    width:calc(var(--cell-size) * 8);
    span {
      font-weight: 700;
      border-bottom: 3px solid #e6821e;
    }
    @media (max-width: 645px) {
      width:calc(var(--cell-size) * 16);
    }
  }
`;

const Slide4A = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide4Section $bgColor={getSlideColor(3, 0)}>
      <Slide4Text>
        <h3><span>Unlock</span> {t('slides.slide4.section1.paragraph1')}</h3>
        <h3>{t('slides.slide4.section1.paragraph2')}</h3>
      </Slide4Text>
    </Slide4Section>
  );
};

const Slide4B = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide4Section $bgColor={getSlideColor(3, 1)}>
      <Slide4Text>
        <h3><span>Unlock</span> {t('slides.slide4.section2.paragraph1')}</h3>
        <h3>{t('slides.slide4.section2.paragraph2')}</h3>
      </Slide4Text>
    </Slide4Section>
  );
};

const Slide4C = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide4Section $bgColor={getSlideColor(3, 2)}>
      <Slide4Text>
        <h3><span>Unlock</span> {t('slides.slide4.section3.paragraph1')}</h3>
        <h3>{t('slides.slide4.section3.paragraph2')}</h3>
      </Slide4Text>
    </Slide4Section>
  );
};

const Slide4Group = ({ getSlideColor }) => ({
  horizontal: [
    <Slide4A key="4.1" getSlideColor={getSlideColor} />,
    <Slide4B key="4.2" getSlideColor={getSlideColor} />,
    <Slide4C key="4.3" getSlideColor={getSlideColor} />
  ]
});

export { Slide4A, Slide4B, Slide4C };
export default Slide4Group;
