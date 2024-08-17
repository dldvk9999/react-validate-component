import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import { VText, VCheckbox } from '../.';

const App = () => {
  /**
   * VText Test
   */
  const [vState1, setVState1] = React.useState<boolean>(false);
  const [vMessage1, setVMessage1] = React.useState<string>('');
  const [message1, setMessage1] = React.useState<string>('');
  React.useEffect(() => {
    if (/[\d]/gim.exec(message1)) {
      setVState1(true);
      setVMessage1('Numbers cannot be entered.');
    } else {
      setVState1(false);
      setVMessage1('');
    }
  }, [message1]);

  /**
   * VCheckbox Test
   */
  const list = ['Tiger', 'Rabbit', 'Elephant', 'Dog', 'Pig', 'Cat', 'Duck'];
  const [checked, setChecked] = React.useState<boolean[]>(
    Array.from(list, () => false)
  );
  const [vState2, setVState2] = React.useState<boolean>(false);
  const [vMessage2, setVMessage2] = React.useState<string>('');
  React.useEffect(() => {
    if (checked.filter(v => v).length > 3) {
      setVState2(true);
      setVMessage2('You can check up to 3 items.');
    } else {
      setVState2(false);
      setVMessage2('');
    }
  }, [checked]);

  return (
    <section className={styles.layout}>
      <h1>React-Validate-Component</h1>
      <div>
        <h2>VText</h2>
        <h3>DO NOT INPUT NUMBER.</h3>
        <VText
          vState={vState1}
          vType={'outer'}
          // vClassName={'test'}
          vShowMessage={true}
          vMessage={vMessage1}
          vLocateMessage={'bottom-left'}
          vMessageClass={styles.validation_message}
          vIsAnimate={true}
          props={{
            onChange: (e: { target: { value: string } }) => {
              setMessage1(e.target.value);
            },
            placeholder: 'this is react-validate-component test.',
            className: styles.input_text,
            defaultValue: 'test',
          }}
        />
      </div>
      <div>
        <h2>VCheckbox</h2>
        <h3>CHECK UP TO 3.</h3>
        <VCheckbox
          vState={vState2}
          vType={'bottom'}
          // vClassName={'test'}
          vLabelClassName={styles.label_class}
          vCheckedClassName={styles.label_check_class}
          vCheckList={list}
          vCheckedList={checked}
          vShowMessage={true}
          vMessage={vMessage2}
          vMessageClass={styles.validation_message}
          vIsAnimate={true}
          props={{
            onChange: (e: { target: { value: string; checked: boolean } }) => {
              const tmp = [...checked];
              const findIndex = list.findIndex(val => val === e.target.value);
              tmp[findIndex] = e.target.checked;
              setChecked(tmp);
            },
          }}
        />
      </div>
    </section>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
