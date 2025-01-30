import * as React from 'react';
import styles from '../../index.module.css';
import { VCheckbox } from './moduleImport';

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

export const VCheckboxComponent = ({ settings }: params) => {
  const list = ['Tiger', 'Rabbit', 'Elephant', 'Dog', 'Pig', 'Cat', 'Duck'];
  const [checked, setChecked] = React.useState<boolean[]>(
    Array.from(list, () => false)
  );

  return (
    <div>
      <h2>VCheckbox</h2>
      <h3>CHECK UP TO 3.</h3>
      <VCheckbox
        vState={settings.vState}
        vType={settings.vType}
        // vClassName={'test'}
        vLayoutClassName={styles.flex}
        vLabelClassName={styles.label_class}
        vCheckedClassName={styles.label_check_class}
        vCheckList={list}
        vCheckedList={checked}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        props={{
          onChange: () => {},
        }}
      />
    </div>
  );
};
