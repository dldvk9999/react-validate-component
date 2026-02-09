import * as React from 'react';
import * as styles from '../../index.module.css';
import { VColor } from './moduleImport';
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

export const VColorComponent = ({ settings }: params) => {
  const [message, setMessage] = React.useState<string>('');

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
        VColor
      </ScrollFloat>
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
