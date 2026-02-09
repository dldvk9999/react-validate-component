import * as React from 'react';
import * as styles from '../../index.module.css';
import { VRadio } from './moduleImport';
import ScrollFloat from '../ScrollFloat/ScrollFloat';

type params = {
  settings: {
    vState: boolean;
    vType: 'top' | 'bottom' | 'tooltip';
    vShowMessage: boolean;
    vMessage: string;
    vLocateMessage:
      | 'top-left'
      | 'top'
      | 'top-right'
      | 'center-left'
      | 'center'
      | 'center-right'
      | 'bottom-left'
      | 'bottom'
      | 'bottom-right';
    vIsAnimate: boolean;
    vUseMaxLength: boolean;
    vMaxLength: number;
  };
};

export const VRadioComponent = ({ settings }: params) => {
  const selectList = [
    {
      name: 'one',
      value: '1',
    },
    {
      name: 'two',
      value: '2',
    },
    {
      name: 'three',
      value: '3',
    },
    {
      name: 'four',
      value: '4',
    },
    {
      name: 'five',
      value: '5',
    },
  ];

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
        VRadio
      </ScrollFloat>
      <VRadio
        vState={settings.vState}
        vName={'selectTest'}
        vSelectListName={selectList.map(obj => obj.name)}
        vSelectListValue={selectList.map(obj => obj.value)}
        vType={settings.vType}
        vClassName={styles.radio_list_class}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vLocateMessage={settings.vLocateMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        props={{
          onChange: () => {},
        }}
      />
    </div>
  );
};
