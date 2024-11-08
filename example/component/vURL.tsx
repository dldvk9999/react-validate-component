import * as React from 'react';
import styles from '../index.module.css';
import { VURL } from '../../.';

export const VURLComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [message, setmessage] = React.useState<string>('https://www.naver.com');

  React.useEffect(() => {
    if (/^http[s]?:\/\/([\S]{3,})/i.test(message)) {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('IT MUST BE URL.');
    }
  }, [message]);

  return (
    <div>
      <h2>VURL</h2>
      <h3>INPUT URL.</h3>
      <VURL
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
            setmessage(e.target.value);
          },
          placeholder: 'this is react-validate-component test.',
          className: styles.input_text,
          defaultValue: 'https://www.naver.com',
        }}
      />
    </div>
  );
};
