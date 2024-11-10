import React from 'react';
import styles from '../index.module.css';
import { VRANGE_PARAMS } from './vRange';

export function VRange({
  vState = false,
  vType = 'bottom',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VRANGE_PARAMS) {
  switch (vType) {
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
            <input type="range" className={vClassName} {...props} />
          </div>
        </>
      );
    case 'bottom':
      return (
        <>
          <div>
            <input type="range" className={`${vClassName} test`} {...props} />
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
    default:
      return <></>;
  }
}
