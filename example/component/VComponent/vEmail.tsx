import * as React from 'react';
import styles from '../../index.module.css';
import { VEmail } from 'react-validate-component';

export const VEmailComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('test@test.com');

  React.useEffect(() => {
    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(message)) {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('IT MUST BE EMAIL.');
    }
  }, [message]);

  return (
    <div>
      <h2>VEmail</h2>
      <h3>INPUT EMail.</h3>
      <VEmail
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
          defaultValue: 'test@test.com',
        }}
      />
    </div>
  );
};
