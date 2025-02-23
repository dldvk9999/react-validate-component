import * as React from 'react';
import styles from '../../index.module.css';
import { VCheckbox } from './moduleImport';
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

export const VCheckboxComponent = ({ settings }: params) => {
  const list = ['Tiger', 'Rabbit', 'Elephant', 'Dog', 'Pig', 'Cat', 'Duck'];
  const [checked, setChecked] = React.useState<boolean[]>(
    Array.from(list, () => false)
  );

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
        VCheckbox
      </ScrollFloat>
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
