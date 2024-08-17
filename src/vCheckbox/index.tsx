import React from 'react';
import styles from './index.module.css';
import { VCHECKBOX_PARAMS } from './vCheckbox';

export function VCheckbox({
  vState = false,
  vType = 'bottom',
  vClassName = '',
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
    return <div className={styles.checkbox_layout}>{result}</div>;
  }

  switch (vType) {
    case 'top':
      return (
        <div className={styles.flex_column}>
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
        <div className={styles.flex_column}>
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
