import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseSlideSection, { SlideText as BaseSlideText } from './SlideSection';
import styled from 'styled-components';

//box-shadow: inset 0px 3px 11px -1px rgb(72 72 72 / 31%), inset 0px -3px 11px -1px rgb(72 72 72 / 31%);
const Slide6Section = styled(BaseSlideSection)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(var(--cell-size) * 4);
  padding-bottom: calc(var(--cell-size) * 3);
  padding-left: calc(var(--cell-size) * 3);
  padding-right: calc(var(--cell-size) * 3);
  box-sizing: border-box;
`;
// Extend base SlideText with Slide1-specific styles
const Slide1Text = styled(BaseSlideText)`
  width: calc(var(--cell-size) * 18);
  min-width: calc(var(--cell-size) * 18);
  height: calc(100vh - calc(var(--cell-size) * 3) - 100px);
  display: flex;
  flex-direction: column;
  gap: 40px;
 
  padding: calc(var(--cell-size) * 1);
  position: relative;
  
  background: #e6811e7a;
  color: white;
  
  
}
 
  
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
    font-size: clamp(4px, 1vw + 0.4rem, 16px);
    line-height: 1.5;
    color:#164266;
    font-weight: 360;
    margin: 0;
    width: calc(var(--cell-size) * 14);
    span {
      font-weight: 700;
      border-bottom: 3px solid #e6821e;
    }
    @media (max-width: 645px) {
      width: calc(var(--cell-size) * 16);
    }
  }
`;
const ProjectInfo = styled.div`
color: #164266;
`;
const SpanUN = styled.span`
  font-weight: 700;
  color: #e6821e;
  font-size: 20px;
`;
const SpanLock = styled.span`
  font-weight: 700;
  color: #164266;
  font-size: 17px;
`;
const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 80px;
  font-size: 14px;

`;
const MenuItem = styled.div`
height: 40px;
width: 100px;
font-size: 16px;
font-weight: 500;

`;

const Partners = styled.div`
 
 
`;

const PartnerCard = styled.div`
 width: 200px;
  height: 250px;
`;

const Disclaimer = styled.div`
 
  font-size: 10px;
  line-height: 2;
  text-align: justify;
  opacity: 0.7;
`;

const Footer = styled.div`
  margin-top: calc(var(--cell-size) * 1);
  font-size: 0.7em;
  opacity: 0.5;
`;

export const Slide6 = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide6Section $bgColor={getSlideColor(5, 0)}>
       <Slide1Text>
      <ProjectInfo>
        <div><SpanUN>UN</SpanUN><SpanLock>lock</SpanLock> - {t('slides.slide6.projectInfo.title')}</div>
       
      </ProjectInfo>
    
    <RowContainer>
     
    <div>

        <MenuItem>{t('slides.slide6.menuTitles.project')}</MenuItem>
        <MenuItem>{t('slides.slide6.menuTitles.targetGroups')}</MenuItem>
        <MenuItem>{t('slides.slide6.menuTitles.activities')}</MenuItem>
        <MenuItem>{t('slides.slide6.menuTitles.partners')}</MenuItem>
        <MenuItem>{t('slides.slide6.menuTitles.results')}</MenuItem>
        <MenuItem>{t('slides.slide6.menuTitles.contacts')}</MenuItem>
    </div>
   
        <PartnerCard>
          <h4>{t('slides.slide6.partners.partner1.name')}</h4>
          <p>{t('slides.slide6.partners.partner1.address')}</p>
          <p>{t('slides.slide6.partners.partner1.phone')}</p>
          <p>{t('slides.slide6.partners.partner1.mobile')}</p>
          <p>{t('slides.slide6.partners.partner1.email')}</p>
        </PartnerCard>
        <PartnerCard>
          <h4>{t('slides.slide6.partners.partner2.name')}</h4>
          <p>{t('slides.slide6.partners.partner2.address')}</p>
          <p>{t('slides.slide6.partners.partner2.phone')}</p>
          <p>{t('slides.slide6.partners.partner2.mobile')}</p>
          <p>{t('slides.slide6.partners.partner2.email')}</p>
        </PartnerCard>
     
    </RowContainer>
      
   

   
      <Footer>
        <p>{t('slides.slide6.additionalInfo.projectDuration')}</p>
        <p>{t('slides.slide6.additionalInfo.copyright')}</p>
        <p>{t('slides.slide6.projectInfo.subtitle')}</p>
        <p>{t('slides.slide6.projectInfo.reference')}</p>
      </Footer>
      <Disclaimer>
        <p>{t('slides.slide6.euDisclaimer.text')}</p>
      
      </Disclaimer>

      </Slide1Text>
    </Slide6Section>
  );
};

export default Slide6;
