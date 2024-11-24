import * as React from 'react';
import styles from '../index.module.css';
import { VText } from '../../dist';

export const VTextComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    if (/[\d]/gim.exec(message)) {
      setvState(true);
      setvMessage('Numbers cannot be entered.');
    } else {
      setvState(false);
      setvMessage('');
    }
  }, [message]);

  return (
    <div>
      <h2>VText</h2>
      <h3>DO NOT INPUT NUMBER.</h3>
      <VText
        vState={vState}
        vType={'outer'}
        // vClassName={'test'}
        vShowMessage={true}
        vMessage={vMessage}
        vLocateMessage={'bottom-left'}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setMessage(e.target.value);
          },
          placeholder: 'this is react-validate-component test.',
          className: styles.input_text,
          defaultValue: 'test',
        }}
      />
    </div>
  );
};
