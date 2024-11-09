### VCheckbox Component

`VCheckbox` 컴포넌트는 기본적인 체크박스 필드에 유효성 검사 문구를 출력해주는 기능을 제공합니다.

The `VCheckbox` component provides functionality to display validation messages for basic checkbox fields.

#### 사용 예제, Example

```jsx
import React from 'react';
import { VCheckbox } from 'react-validate-component';

const App = () => {
  const list = ['Tiger', 'Rabbit', 'Elephant', 'Dog', 'Pig', 'Cat', 'Duck'];
  const [checked, setChecked] = React.useState<boolean[]>(
    Array.from(list, () => false)
  );
  const [vState, setvState] = React.useState<boolean>(false);
  const [vMessage2, setVMessage2] = React.useState<string>('');
  React.useEffect(() => {
    if (checked.filter(v => v).length > 3) {
      setvState(true);
      setVMessage2('You can check up to 3 items.');
    } else {
      setvState(false);
      setVMessage2('');
    }
  }, [checked]);

  return (
    <section className={styles.layout}>
      <h1>React-Validate-Component</h1>
      <div>
        <h2>VCheckbox</h2>
        <h3>CHECK UP TO 3.</h3>
        <VCheckbox
          vState={vState}
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

export default App;
```

#### Props - KR

- `vState` (boolean): 유효성 상태 값입니다.
- `vType` (`top`, `bottom`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vLabelClassName` (string): label 태그에 입힐 class 명입니다.
- `vCheckedClassName` (string): check 상태일 때 입힐 class 명입니다.
- `vCheckList` (string[]): checkbox를 만들때 사용하는 배열입니다. 해당 배열에 있는 string값으로 체크박스를 만듭니다.
- `vCheckedList` (boolean[]): 현재 체크되어있는 상태를 나타내는 배열입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

#### Props - EN

- `vState` (boolean): The validity status value.
- `vType` (`top`, `bottom`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vLabelClassName` (string): The class name to apply to the `label` tag.
- `vCheckedClassName` (string): The class name to apply when checked.
- `vCheckList` (string[]): An array used to create checkboxes. Checkboxes are created using the string values in this array.
- `vCheckedList` (boolean[]): An array representing the current checked state.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.
