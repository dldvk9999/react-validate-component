### VRadio Component

`VRadio` 컴포넌트는 기본적인 URL 필드에 유효성 검사 문구를 출력해주는 기능을 제공합니다.

The `VRadio` component provides functionality to display validation messages for basic radio fields.

#### 사용 예제, Example

```jsx
import React from 'react';
import { VURL } from 'react-validate-component';

const App = () => {
  const [vState, setvState] = React.useState < boolean > false;
  const [vMessage, setvMessage] = React.useState < string > '';
  const [nowSelect, setNowSelect] = React.useState < string > '';
  const selectList = [
    { name: 'one', value: '1' },
    { name: 'two', value: '2' },
    { name: 'three', value: '3' },
    { name: 'four', value: '4' },
    { name: 'five', value: '5' },
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

export default App;
```

#### Props - KR

- `vState` (boolean): 유효성 상태 값입니다.
- `vName` (string): Radio에 적용될 name을 지정합니다.
- `vSelectListName` (string[]): Radio 리스트 중 Label에 출력될 이름을 설정합니다.
- `vSelectListValue` (string[]): Radio 리스트 중 value에 해당될 값을 설정합니다.
- `vType` (`top`, `bottom`, `tooltip`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): 유효성 메시지를 element 어디에 붙일지 위치값입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

#### Props - EN

- `vState` (boolean): The validity status value.
- `vName` (string): Specifies the name to be applied to the Radio.
- `vSelectListName` (string[]): Set the name to be displayed on the label in the Radio list.
- `vSelectListValue` (string[]): Set the value corresponding to value in the Radio list.
- `vType` (`top`, `bottom`, `tooltip`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): The position where the validation message should be displayed relative to the element.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.
