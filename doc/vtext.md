### VText Component

`VText` 컴포넌트는 기본적인 텍스트 입력 필드에 유효성 검사 문구를 출력해주는 기능을 제공합니다.

The `VText` component provides functionality to display validation messages for basic text input fields.

#### 사용 예제, Example

```jsx
import React from 'react';
import { VText } from 'react-validate-component';

const App = () => {
  const [message, setMessage] = React.useState('');
  const [vState, setVState] = React.useState(false);
  const [vMessage, setVMessage] = React.useState('');

  React.useEffect(() => {
    if (/[\d]/gim.exec(message)) {
      setVState(true);
      setVMessage('DO NOT INPUT NUMBER.');
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
          vType={'outer'}
          vClassName={'test'}
          vShowMessage={true}
          vMessage={vMessage}
          vLocateMessage={'bottom-left'}
          vMessageClass={styles.validation_message}
          vIsAnimate={true}
          vUseMaxLength={true}
          vMaxLength={30}
          vClassMaxLength={'test'}
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

export default App;
```

#### Props - KR

- `vState` (boolean): 유효성 상태 값입니다.
- `vType` (`inner`, `outer`, `tooltip`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): 유효성 메시지를 element 어디에 붙일지 위치값입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `vUseMaxLength` (boolean): 입력 최댓값 사용 여부입니다.
- `vMaxLength` (number): 입력 최댓값입니다.
- `vClassMaxLength` (string): 입력 최댓값에 입힐 class 명입니다.
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

#### Props - EN

- `vState` (boolean): The validity status value.
- `vType` (`inner`, `outer`, `tooltip`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): The position where the validation message should be displayed relative to the element.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `vUseMaxLength` (boolean): Whether to use the maximum input value.
- `vMaxLength` (number): Maximum input value.
- `vClassMaxLength` (string): The class name to apply to the maximum input value.
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.
