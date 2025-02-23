import styles from '../../index.module.css';
import { VText } from './moduleImport';
import ScrollFloat from '../ScrollFloat/ScrollFloat';

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

export const VTextComponent = ({ settings }: params) => {
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
        VText
      </ScrollFloat>
      <VText
        vState={settings.vState}
        vType={settings.vType}
        // vClassName={'test'}
        vShowMessage={settings.vShowMessage}
        vMessage={settings.vMessage}
        vLocateMessage={settings.vLocateMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={settings.vIsAnimate}
        vUseMaxLength={settings.vUseMaxLength}
        vMaxLength={settings.vMaxLength}
        // vClassMaxLength={'test'}
        props={{
          onChange: () => {},
          placeholder: 'this is react-validate-component test.',
          className: styles.input_text,
          defaultValue: 'test',
        }}
      />
    </div>
  );
};
