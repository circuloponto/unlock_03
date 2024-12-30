import React from 'react';
import SlideSection from './SlideSection';

const Slide5 = ({ getSlideColor }) => {
  return (
    <SlideSection $bgColor={getSlideColor(4, 0)}>
      {/* Slide 5 content */}
    </SlideSection>
  );
};

export default Slide5;
