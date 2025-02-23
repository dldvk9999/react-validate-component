import * as React from 'react';
import styles from '../../index.module.css';
import { VRange } from './moduleImport';
import ScrollFloat from '../ScrollFloat/ScrollFloat';

type params = {
  settings: {
    vState: boolean;
    vType: 'top' | 'bottom';
    vShowMessage: boolean;
    vMessage: string;
    vIsAnimate: boolean;
    vUseMaxLength: boolean;
    vMaxLength: number;
  };
};

export const VRangeComponent = ({ settings }: params) => {
  const [rangeValue, setRangeValue] = React.useState<number>(50);

  return (
    <div>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.1}
        containerClassName={styles.component_container}
        textClassName={styles.component_title}
      >
        VRange
      </ScrollFloat>
      <VRange
        vState={settings.vState}
        vType={settings.vType}
        vClassName={'test'}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setRangeValue(~~e.target.value);
          },
          min: 0,
          max: 100,
          step: 10,
          value: rangeValue,
        }}
      />
      now Range: {rangeValue}
    </div>
  );
};
