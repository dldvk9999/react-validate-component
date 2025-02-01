import * as React from 'react';
import styles from '../../index.module.css';
import { VEmail } from './moduleImport';

type params = {
  settings: {
    vState: boolean;
    vType: 'inner' | 'outer' | 'tooltip';
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

export const VEmailComponent = ({ settings }: params) => {
  return (
    <div>
      <h2>VEmail</h2>
      <VEmail
        vState={settings.vState}
        vType={settings.vType}
        // vClassName={'test'}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vLocateMessage={settings.vLocateMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        props={{
          onChange: () => {},
          placeholder: 'this is react-validate-component test.',
          className: styles.input_text,
          defaultValue: 'test@test.com',
        }}
      />
    </div>
  );
};
