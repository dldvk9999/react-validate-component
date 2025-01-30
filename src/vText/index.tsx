import React from 'react';
import styles from '../index.module.css';
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
  vUseMaxLength = false,
  vMaxLength = 0,
  vClassMaxLength = '',
  props = {},
}: VTEXT_PARAMS) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputLength, setInputLength] = React.useState<number>(
    (props?.defaultValue || props?.value)?.length ?? 0
  );

  // 공통 input 태그 변수화
  const inputHTML = () => {
    return (
      <input
        type="text"
        ref={inputRef}
        {...props}
        onChange={e => {
          if (vUseMaxLength && e.target.value.length > vMaxLength) {
            e.preventDefault();
            e.target.value = e.target.value.slice(0, vMaxLength);
          } else {
            props?.onChange(e);
          }
        }}
        defaultValue={props?.defaultValue ?? ''}
        className={`${props?.className ?? ''} ${vClassName} ${
          vState ? styles.invalid : ''
        }`}
      ></input>
    );
  };

  // 일부 옵션 값들은 input 기본 속성값을 이용하기 위해 merge 진행
  if (vUseMaxLength) {
    props = { ...props, maxLength: vMaxLength };
  }

  React.useEffect(() => {
    // 입력 최댓값을 사용할 경우 useEffect Hook 설정
    if (vUseMaxLength) {
      setInputLength((inputRef.current?.value ?? '').length);
    }
  }, [inputRef.current?.value]);

  switch (vType) {
    case 'outer':
      return (
        <div
          className={`${styles.vinput} ${styles[`vinput-${vLocateMessage}`]} ${
            vUseMaxLength ? styles.vMaxLengthContainer : ''
          }`}
        >
          {inputHTML()}
          {vUseMaxLength && (
            <p className={`${styles.vMaxLength} ${vClassMaxLength}`}>
              {inputLength} / {vMaxLength}
            </p>
          )}
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
        <div
          className={`${styles.vinput} ${
            vUseMaxLength ? styles.vMaxLengthContainer : ''
          }`}
        >
          {inputHTML()}
          {vUseMaxLength && (
            <p className={`${styles.vMaxLength} ${vClassMaxLength}`}>
              {inputLength} / {vMaxLength}
            </p>
          )}
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
          } ${vUseMaxLength ? styles.vMaxLengthContainer : ''}`}
        >
          {inputHTML()}
          {vUseMaxLength && (
            <p className={`${styles.vMaxLength} ${vClassMaxLength}`}>
              {inputLength} / {vMaxLength}
            </p>
          )}
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
