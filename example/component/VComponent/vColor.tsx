import * as React from 'react';
import styles from '../../index.module.css';
import { VColor } from './moduleImport';

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

export const VColorComponent = ({ settings }: params) => {
  const [message, setMessage] = React.useState<string>('');

  return (
    <div>
      <h2>VColor</h2>
      <h3>Choose Color.</h3>
      <VColor
        vState={settings.vState}
        vType={settings.vType}
        // vClassName={'test'}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setMessage(e.target.value);
          },
        }}
      />
      now Color: {message}
    </div>
  );
};
