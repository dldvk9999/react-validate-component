import * as React from 'react';
import styles from '../index.module.css';
import { VCheckbox } from '../../dist';

export const VCheckboxComponent = () => {
  const list = ['Tiger', 'Rabbit', 'Elephant', 'Dog', 'Pig', 'Cat', 'Duck'];
  const [checked, setChecked] = React.useState<boolean[]>(
    Array.from(list, () => false)
  );
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');

  React.useEffect(() => {
    if (checked.filter(v => v).length > 3) {
      setvState(true);
      setvMessage('You can check up to 3 items.');
    } else {
      setvState(false);
      setvMessage('');
    }
  }, [checked]);

  return (
    <div>
      <h2>VCheckbox</h2>
      <h3>CHECK UP TO 3.</h3>
      <VCheckbox
        vState={vState}
        vType={'bottom'}
        // vClassName={'test'}
        vLayoutClassName={styles.flex}
        vLabelClassName={styles.label_class}
        vCheckedClassName={styles.label_check_class}
        vCheckList={list}
        vCheckedList={checked}
        vShowMessage={true}
        vMessage={vMessage}
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
  );
};
