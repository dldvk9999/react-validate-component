import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import { VText } from '../.';

const App = () => {
  const [message, setMessage] = React.useState('');
  const [vState, setVState] = React.useState(false);
  const [vMessage, setVMessage] = React.useState('');

  React.useEffect(() => {
    if (/[\d]/gim.exec(message)) {
      setVState(true);
      setVMessage('숫자는 입력이 안됩니다.');
    } else {
      setVState(false);
      setVMessage('');
    }
  }, [message]);

  return (
    <section className={styles.layout}>
      <h1>React-Validate-Component</h1>
      <div>
        <h2>VText</h2>
        <h3>DO NOT INPUT NUMBER.</h3>
        <VText
          vState={vState}
          vType={'tooltip'}
          // vClassName={''}
          vShowMessage={true}
          vMessage={vMessage}
          vLocateMessage={'bottom-right'}
          vMessageClass={styles.validation_message}
          // vIsAnimate={false}
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
    </section>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
