import * as React from 'react';
import styles from '../index.module.css';
import { VRange } from 'react-validate-component';

export const VRangeComponent = () => {
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage, setvMessage] = React.useState<string>('');
  const [rangeValue, setRangeValue] = React.useState<number>(50);

  React.useEffect(() => {
    if (rangeValue < 80) {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('IT MUST BE BELOW 80.');
    }
  }, [rangeValue]);

  return (
    <div>
      <h2>VRange</h2>
      <h3>Select Range.</h3>
      <VRange
        vState={vState}
        vType={'bottom'}
        vClassName={'test'}
        vShowMessage={true}
        vMessage={vMessage}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setRangeValue(~~e.target.value);
          },
          min: 0,
          max: 100,
          step: 10,
          value: rangeValue,
        }}
      />
      now Range: {rangeValue}
    </div>
  );
};
