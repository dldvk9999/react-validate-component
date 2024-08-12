import React from 'react';
import styles from './index.module.css';
import { VTEXT_PARAMS } from './types/vinput';

// Text
export const VText = ({
  vState = false,
  vType = 'outer',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vLocateMessage = 'bottom',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VTEXT_PARAMS) => {
  switch (vType) {
    case 'outer':
      return (
        <div
          className={`${styles.vinput} ${styles[`vinput-${vLocateMessage}`]}`}
        >
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
                vIsAnimate ? styles.animateMessage : ''
              }`}
            >
              {vMessage}
            </p>
          ) : null}
        </div>
      );
    case 'inner':
      return (
        <div className={styles.vinput}>
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
              className={`${vMessageClass} ${styles.innerMessage} ${
                styles[`innerMessage-${vLocateMessage}`]
              } ${vIsAnimate ? styles.animateMessage : ''}`}
            >
              {vMessage}
            </p>
          ) : null}
        </div>
      );
    case 'tooltip':
      return (
        <div
          className={`${styles.vinput} ${
            styles[`tooltipMessage-${vLocateMessage}`]
          }`}
        >
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
              className={`${vMessageClass} ${styles.tooltipMessage} ${
                styles[`tooltipMessage-${vLocateMessage}`]
              } ${vIsAnimate ? styles.animateMessage : ''}`}
            >
              {vMessage}
            </p>
          ) : null}
        </div>
      );
    default:
      return null;
  }
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
