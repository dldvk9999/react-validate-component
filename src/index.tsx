import * as React from 'react';
import { VINPUT_PARAMS } from './types/vinput';

// Text
export const VText = ({
  maxLength,
  value,
  className,
  props,
}: VINPUT_PARAMS) => {
  return (
    <input
      type="text"
      {...props}
      className={className}
      maxLength={maxLength}
      value={value}
    />
  );
};

// Checkbox
export const VCheckbox = () => {
  return <input type="checkbox" />;
};

// Radio
export const VRadio = () => {
  return <input type="radio" />;
};

// Date
export const VDate = () => {
  return <input type="date" />;
};

// Color
export const VColor = () => {
  return <input type="color" />;
};

// Email
export const VEmail = () => {
  return <input type="email" />;
};

// Range
export const VRange = () => {
  return <input type="range" />;
};

// Url
export const VUrl = () => {
  return <input type="url" />;
};
