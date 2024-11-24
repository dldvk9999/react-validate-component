import * as React from 'react';
import styles from '../index.module.css';
import { VDate } from 'react-validate-component';

export const VDateComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [dateValue, setDateValue] = React.useState<string>('');

  React.useEffect(() => {
    if (dateValue !== '') {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('Select Date.');
    }
  }, [dateValue]);

  return (
    <div>
      <h2>VDate</h2>
      <h3>Select Date.</h3>
      <VDate
        vState={vState}
        vType={'bottom'}
        vClassName={'test'}
        vShowMessage={true}
        vMessage={vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setDateValue(e.target.value);
          },
          min: '2024-01-01',
          max: '2024-12-31',
          value: dateValue,
        }}
      />
      now Date: {dateValue}
    </div>
  );
};
