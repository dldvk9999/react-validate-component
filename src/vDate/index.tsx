import React from 'react';
import styles from '../index.module.css';
import { VDATE_PARAMS } from './vDate';

export function VDate({
  vState = false,
  vType = 'bottom',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VDATE_PARAMS) {
  switch (vType) {
    default:
    case 'top':
      return (
        <>
          {vState && vShowMessage ? (
            <p
              className={`${vMessageClass} ${
                vIsAnimate ? styles.animateMessage : ''
              }`}
            >
              {vMessage}
            </p>
          ) : null}
          <div>
            <input type="date" className={vClassName} {...props} />
          </div>
        </>
      );
    case 'bottom':
      return (
        <>
          <div>
            <input type="date" className={`${vClassName} test`} {...props} />
          </div>
          {vState && vShowMessage ? (
            <p
              className={`${vMessageClass} ${
                vIsAnimate ? styles.animateMessage : ''
              }`}
            >
              {vMessage}
            </p>
          ) : null}
        </>
      );
  }
}
