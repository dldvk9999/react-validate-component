import React from 'react';
import styles from './index.module.css';
import { VTEXT_PARAMS } from './vText';

// Text
export function VText({
  vState = false,
  vType = 'outer',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vLocateMessage = 'bottom',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VTEXT_PARAMS) {
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
            className={`${props?.className ?? ''} ${vClassName} ${
              vState ? styles.invalid : ''
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
            className={`${props?.className ?? ''} ${vClassName} ${
              vState ? styles.invalid : ''
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
            className={`${props?.className ?? ''} ${vClassName} ${
              vState ? styles.invalid : ''
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
      return <div></div>;
  }
}
