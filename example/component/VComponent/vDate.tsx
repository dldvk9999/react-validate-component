import * as React from 'react';
import styles from '../../index.module.css';
import { VDate } from './moduleImport';

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

export const VDateComponent = ({ settings }: params) => {
  const [dateValue, setDateValue] = React.useState<string>('');

  return (
    <div>
      <h2>VDate</h2>
      <h3>Select Date.</h3>
      <VDate
        vState={settings.vState}
        vType={settings.vType}
        // vClassName={'test'}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setDateValue(e.target.value);
          },
          min: '2024-01-01',
          max: '2024-12-31',
          value: dateValue,
        }}
      />
      now Date: {dateValue}
    </div>
  );
};
