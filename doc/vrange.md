### VRange Component

`VRange` 컴포넌트는 기본적인 URL 필드에 유효성 검사 문구를 출력해주는 기능을 제공합니다.

The `VRange` component provides functionality to display validation messages for basic range fields.

#### 사용 예제, Example

```jsx
import React from 'react';
import { VColor } from 'react-validate-component';

const App = () => {
  const [vState, setvState] = React.useState < boolean > false;
  const [vMessage, setvMessage] = React.useState < string > '';
  const [rangeValue, setRangeValue] = React.useState < number > 50;

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

export default App;
```

#### Props - KR

- `vState` (boolean): 유효성 상태 값입니다.
- `vType` (`top`, `bottom`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

#### Props - EN

- `vState` (boolean): The validity status value.
- `vType` (`top`, `bottom`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.