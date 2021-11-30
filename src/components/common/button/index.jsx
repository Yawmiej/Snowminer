import React from 'react';

import './style.scss';
import { colors } from '../../../constants';

/**
 * VARIANTS
 * 1. Solid - solid background
 * 2. Outline - Border & transparent background
 *
 * THEME
 * Blue - Colors.primary
 * White - Colors.white
 */

const getColorFromTheme = (theme) => {
  switch (theme) {
    case 'blue':
      return colors.primary;
    case 'white':
      return colors.white;
    case 'dark':
      return colors.bgDark;
    default:
      return colors.primary;
  }
};

function Button({
  type = 'button',
  variant = 'solid',
  theme = 'blue',
  leftIcon,
  rightIcon,
  children,
  className = '',
  color = '',
}) {
  const buttonColor = getColorFromTheme(theme);

  return (
    <button
      className={`button ${className} ${variant === 'solid' ? 'shadow' : ''}`}
      type={type}
      style={{
        backgroundColor: variant === 'solid' ? buttonColor : 'transparent',
        border: `1px solid ${buttonColor}`,
        color: color
          ? color
          : variant === 'outline'
          ? buttonColor
          : colors.primary,
      }}
    >
      {leftIcon && (
        <span className="button__icon button__icon--right">{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className="button__icon button__icon--right">{rightIcon}</span>
      )}
    </button>
  );
}

export default Button;
