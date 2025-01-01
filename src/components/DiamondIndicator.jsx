import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LanguagePicker from './LanguagePicker';

const NavigationGrid = styled.div`
  position: fixed;
  bottom: 55px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 55px 100px 100px 55px;
  grid-template-rows: 20px;
  gap: 10px;
  align-items: center;
  z-index: 1190;
  justify-items: center;
  opacity: ${props => props.$menuOpen ? '0' : '1'};
  pointer-events: ${props => props.$menuOpen ? 'none' : 'auto'};
  transition: opacity 0.3s ease;

  @media (max-width: 500px) {
    bottom: 18px;
    left: 50%;
    grid-template-columns: 55px 70px 70px 55px;
    grid-template-rows: 20px;
    transform: translateX(-50%);
  }
`;

const NavigationButton = styled(motion.button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: rgb(171 168 168 / 10%);
  box-shadow: 0 2px 0 2px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  backdrop-filter: blur(10px);
  color: white;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;
//color: ${props => props.$isActive ? props.$color : 'white'};
const StyledIcon = styled.div`
  color: ${'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

const CenterSpace = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2/span 2;
  grid-row: 1;
  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const DiamondIndicator = ({ 
  currentVerticalIndex, 
  currentHorizontalIndex, 
  isMenuOpen,
  getSlideColor,
  onNavigate
}) => {
  const getCurrentConstraints = () => {
    const navigationConstraints = {
      "0.0": { left: false, right: true },     // Can go right to next slide
      "1.0": { left: true, right: true },      // Can go both ways
      "1.1": { left: true, right: true },      // Can go both ways
      "1.2": { left: true, right: true },      // Can go both ways
      "2.0": { left: true, right: true },      // Can go both ways
      "3.0": { left: true, right: true },      // Can go both ways
      "3.1": { left: true, right: true },      // Can go both ways
      "4.0": { left: true, right: true },      // Can go both ways
      "5.0": { left: true, right: false },     // Can only go left to previous slide
    };
    const key = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    return navigationConstraints[key] || { left: false, right: false };
  };

  const getNextSlideColor = (direction) => {
    const nextSlide = getNextSlidePosition(direction);
    return getSlideColor(nextSlide.vertical, nextSlide.horizontal);
  };

  const getNextSlidePosition = (direction) => {
    const currentKey = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    const slideSequence = ["0.0", "1.0", "1.1", "1.2", "2.0", "3.0", "3.1", "4.0", "5.0"];
    const currentIndex = slideSequence.indexOf(currentKey);
    
    if (direction === 'right' && currentIndex < slideSequence.length - 1) {
      const nextKey = slideSequence[currentIndex + 1];
      const [vertical, horizontal] = nextKey.split('.').map(Number);
      return { vertical, horizontal };
    } else if (direction === 'left' && currentIndex > 0) {
      const prevKey = slideSequence[currentIndex - 1];
      const [vertical, horizontal] = prevKey.split('.').map(Number);
      return { vertical, horizontal };
    }
    
    return { vertical: currentVerticalIndex, horizontal: currentHorizontalIndex };
  };

  const handleClick = (direction) => {
    const constraints = getCurrentConstraints();
    if (!constraints[direction]) return;
    
    const nextSlide = getNextSlidePosition(direction);
    if (nextSlide.vertical !== currentVerticalIndex || nextSlide.horizontal !== currentHorizontalIndex) {
      if (direction === 'left') {
        if (nextSlide.vertical < currentVerticalIndex) {
          onNavigate('up');
        } else if (nextSlide.horizontal < currentHorizontalIndex) {
          onNavigate('left');
        }
      } else if (direction === 'right') {
        if (nextSlide.vertical > currentVerticalIndex) {
          onNavigate('down');
        } else if (nextSlide.horizontal > currentHorizontalIndex) {
          onNavigate('right');
        } else if (nextSlide.vertical !== currentVerticalIndex) {
          onNavigate('down');
        }
      }
    }
  };

  const constraints = getCurrentConstraints();

  return (
    <NavigationGrid $menuOpen={isMenuOpen}>
      {/* Left button */}
      <div style={{ gridColumn: 1, gridRow: 1 }}>
        <NavigationButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('left')}
          disabled={!constraints.left}
        >
          <StyledIcon 
            $isActive={constraints.left}
            $color={constraints.left ? getNextSlideColor('left') : 'white'}
          >
            <FaChevronLeft className="arrow arrow-left"/>
          </StyledIcon>
        </NavigationButton>
      </div>

      {/* Center space for breadcrumbs */}
      <CenterSpace />

      {/* Right button */}
      <div style={{ gridColumn: 4, gridRow: 1 }}>
        <NavigationButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('right')}
          disabled={!constraints.right}
        >
          <StyledIcon 
            $isActive={constraints.right}
            $color={constraints.right ? getNextSlideColor('right') : 'white'}
          >
            <FaChevronRight className="arrow arrow-right"/>
          </StyledIcon>
        </NavigationButton>
      </div>
    </NavigationGrid>
  );
};

export default DiamondIndicator;
