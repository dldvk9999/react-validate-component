import * as React from 'react';
import styles from '../index.module.css';
import { VColor } from 'react-validate-component';

export const VColorComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    if (message !== '') {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('Choose Color.');
    }
  }, [message]);

  return (
    <div>
      <h2>VColor</h2>
      <h3>Choose Color.</h3>
      <VColor
        vState={vState}
        vType={'bottom'}
        vClassName={'test'}
        vShowMessage={true}
        vMessage={vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
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
