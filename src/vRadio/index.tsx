import React from 'react';
import styles from '../index.module.css';
import { VRADIO_PARAMS } from './vRadio';

export function VRadio({
  vState = false,
  vName = '',
  vSelectListName = [],
  vSelectListValue = [],
  vType = 'bottom',
  vClassName = '',
  vShowMessage = false,
  vMessage = '',
  vLocateMessage = 'bottom',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VRADIO_PARAMS) {
  function makeSelectList() {
    const result = [];

    for (let i = 0; i < vSelectListName.length; i += 1) {
      result.push(
        <div key={`${vName}-${i}`}>
          <input
            type="radio"
            id={`${vName}-${i}`}
            name={vName}
            value={vSelectListValue[i]}
            {...props}
          ></input>
          <label htmlFor={`${vName}-${i}`}>{vSelectListName[i]}</label>
        </div>
      );
    }

    return result;
  }

  switch (vType) {
    default:
    case 'bottom':
      return (
        <>
          <div
            className={`${styles.vinput} ${styles[`vinput-${vLocateMessage}`]}`}
          >
            <div className={`${props?.className ?? ''} ${vClassName}`}>
              {makeSelectList()}
            </div>
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
    case 'top':
      return (
        <>
          <div
            className={`${styles.vinput} ${styles[`vinput-${vLocateMessage}`]}`}
          >
            {vState && vShowMessage ? (
              <p
                className={`${vMessageClass} ${
                  vIsAnimate ? styles.animateMessage : ''
                }`}
              >
                {vMessage}
              </p>
            ) : null}
            <div className={`${props?.className ?? ''} ${vClassName}`}>
              {makeSelectList()}
            </div>
          </div>
        </>
      );
    case 'tooltip':
      return (
        <>
          <div
            className={`${styles.vinput} ${
              styles[`tooltipMessage-${vLocateMessage}`]
            }`}
          >
            <div className={`${props?.className ?? ''} ${vClassName}`}>
              {makeSelectList()}
            </div>
          </div>
          {vState && vShowMessage ? (
            <p
              className={`${vMessageClass} ${styles.tooltipMessage} ${
                styles[`tooltipMessage-${vLocateMessage}`]
              } ${vIsAnimate ? styles.animateMessage : ''}`}
            >
              {vMessage}
            </p>
          ) : null}
        </>
      );
  }
}
