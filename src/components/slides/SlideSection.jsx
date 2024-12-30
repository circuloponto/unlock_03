import styled from 'styled-components';

// Base styles that all slides will share
const SlideSection = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.$bgColor};
  scroll-snap-align: start;
  position: relative;
`;

// Base text styles that can be extended
export const SlideText = styled.div`
  color: white;
`;

export default SlideSection;
