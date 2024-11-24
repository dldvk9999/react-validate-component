import * as React from 'react';
import styles from '../index.module.css';
import { VRadio } from 'react-validate-component';

export const VRadioComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [nowSelect, setNowSelect] = React.useState<string>('');
  const selectList = [
    {
      name: 'one',
      value: '1',
    },
    {
      name: 'two',
      value: '2',
    },
    {
      name: 'three',
      value: '3',
    },
    {
      name: 'four',
      value: '4',
    },
    {
      name: 'five',
      value: '5',
    },
  ];

  React.useEffect(() => {
    if (nowSelect !== '') {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('IT MUST BE SELECT.');
    }
  }, [nowSelect]);

  return (
    <div>
      <h2>VRadio</h2>
      <h3>Select Something.</h3>
      <VRadio
        vState={vState}
        vName={'selectTest'}
        vSelectListName={selectList.map(obj => obj.name)}
        vSelectListValue={selectList.map(obj => obj.value)}
        vType={'bottom'}
        vClassName={styles.radio_list_class}
        vShowMessage={true}
        vMessage={vMessage}
        vLocateMessage={'bottom-left'}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setNowSelect(e.target.value);
          },
        }}
      />
    </div>
  );
};
