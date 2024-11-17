import React from 'react';
import styles from '../index.module.css';
import { VCHECKBOX_PARAMS } from './vCheckbox';

export function VCheckbox({
  vState = false,
  vType = 'bottom',
  vClassName = '',
  vLayoutClassName = '',
  vLabelClassName = '',
  vCheckedClassName = '',
  vCheckList = [],
  vCheckedList = [],
  vShowMessage = false,
  vMessage = '',
  vMessageClass = '',
  vIsAnimate = false,
  props = {},
}: VCHECKBOX_PARAMS) {
  // 체크박스 리스트 생성 함수
  function makeCheckList() {
    const result: React.JSX.Element[] = [];
    vCheckList.forEach((val, i) => {
      result.push(
        <label
          htmlFor={`vCheckbox-${i}`}
          className={`${vLabelClassName} ${
            vCheckedList[i] ? vCheckedClassName : ''
          } ${vState ? styles.invalid : ''}`}
          key={i}
        >
          <input
            id={`vCheckbox-${i}`}
            type="checkbox"
            className={vClassName}
            hidden
            value={val}
            checked={vCheckedList[i]}
            {...props}
          />
          <span>{val}</span>
        </label>
      );
    });
    return <div className={vLayoutClassName}>{result}</div>;
  }

  switch (vType) {
    case 'top':
      return (
        <div>
          {vState && vShowMessage ? (
            <p
              className={`${vMessageClass} ${
                vIsAnimate ? styles.animateMessage : ''
              }`}
            >
              {vMessage}
            </p>
          ) : null}
          {makeCheckList()}
        </div>
      );
    case 'bottom':
      return (
        <div>
          {makeCheckList()}
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
    default:
      return <></>;
  }
}
