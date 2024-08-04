import React from 'react';
import styles from './index.module.css';
// import { VTEXT_PARAMS } from './types/vinput';

// Text
export const VText = ({
  className,
  value,
  placeholder,
  onChange,
  state,
}: any) => {
  return (
    <input
      type="text"
      className={`${className} ${state ? styles.invalid : ''}`}
      value={value ?? ''}
      placeholder={placeholder}
      onChange={onChange}
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
