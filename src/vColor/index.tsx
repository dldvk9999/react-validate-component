import React from 'react';
import styles from '../index.module.css';
import { VCOLOR_PARAMS } from './vColor';

export function VColor({
  vState = false,
  vType = 'bottom',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VCOLOR_PARAMS) {
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
            <input type="color" className={vClassName} {...props} />
          </div>
        </>
      );
    case 'bottom':
      return (
        <>
          <div>
            <input type="color" className={`${vClassName} test`} {...props} />
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
