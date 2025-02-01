import * as React from 'react';
import styles from '../../index.module.css';
import { VRange } from './moduleImport';

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
      <h2>VRange</h2>
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
