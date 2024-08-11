import React from 'react';
import styles from './index.module.css';
import { VTEXT_PARAMS } from './types/vinput';

// Text
export const VText = ({
  vState = false,
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vIsInnerMessage = false,
  vLocateMessage = 'bottom',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VTEXT_PARAMS) => {
  const Result: JSX.Element = (
    <div className={`${styles.vinput} ${styles[`vinput-${vLocateMessage}`]}`}>
      <input
        type="text"
        {...props}
        defaultValue={props?.defaultValue ?? ''}
        className={`${props?.className} ${
          vState ? vClassName || styles.invalid : ''
        }`}
      ></input>
      {vState && vShowMessage ? (
        <p
          className={`${vMessageClass} ${
            vIsInnerMessage
              ? `${props?.className} ${styles.innerMessage} ${
                  styles[`innerMessage-${vLocateMessage}`]
                }`
              : ''
          } ${vIsAnimate ? styles.animateMessage : ''}`}
        >
          {vMessage}
        </p>
      ) : null}
    </div>
  );

  return Result;
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
