import styles from '../../index.module.css';
import { VText } from 'react-validate-component';

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
      <h2>VText</h2>
      <h3>DO NOT INPUT NUMBER.</h3>
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
