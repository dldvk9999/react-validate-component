import React from 'react';
import styles from './index.module.css';
import { VEMAIL_PARAMS } from './vEmail';

export function VEmail({
  vState = false,
  vType = 'outer',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vLocateMessage = 'bottom',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VEMAIL_PARAMS) {
  switch (vType) {
    case 'outer':
      return (
        <div
          className={`${styles.vinput} ${styles[`vinput-${vLocateMessage}`]}`}
        >
          <input
            type="email"
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
            type="email"
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
            type="email"
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
