# react-validate-component

`react-validate-component`는 리액트 애플리케이션에서 입력 유효성 검사를 간편하게 처리할 수 있도록 도와주는 라이브러리입니다. 현재 `VText` 컴포넌트가 구현되어 있으며, 이 컴포넌트를 사용하여 간단하게 텍스트 입력의 유효성을 검사할 수 있습니다.

`react-validate-component` is a library that helps simplify input validation in React applications. Currently, it includes the `VText` component, which allows for easy validation of text input.

## 설치, Install

`react-validate-component` 라이브러리는 npm 또는 yarn을 통해 설치할 수 있습니다.

The `react-validate-component` library can be installed via npm or yarn.

### npm

```bash
npm install react-validate-component
```

### yarn

```bash
yarn add react-validate-component
```

## 사용법, How to use

현재 라이브러리에는 `VText`, `VCheckbox`, `VURL`, `VEmail` 컴포넌트가 구현되어 있습니다. 이 컴포넌트를 사용하여 텍스트 입력 필드의 유효성 검사를 쉽게 구현할 수 있습니다.

The library currently includes the `VText`, `VCheckbox`, `VURL`, `VEmail` component. You can use this component to easily implement validation for text input fields.

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

#### Props

- `vState` (boolean): 유효성 상태 값입니다.
- `vType` (`inner`, `outer`, `tooltip`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): 유효성 메시지를 element 어디에 붙일지 위치값입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

- `vState` (boolean): The validity status value.
- `vType` (`inner`, `outer`, `tooltip`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): The position where the validation message should be displayed relative to the element.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.

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

#### Props

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

### VURL Component

`VURL` 컴포넌트는 기본적인 URL 필드에 유효성 검사 문구를 출력해주는 기능을 제공합니다.

The `VURL` component provides functionality to display validation messages for basic url fields.

#### 사용 예제, Example

```jsx
import React from 'react';
import { VURL } from 'react-validate-component';

const App = () => {
  const [vState, setvState] = React.useState < boolean > false;
  const [vMessage, setvMessage] = React.useState < string > '';
  const [message, setmessage] =
    React.useState < string > 'https://www.naver.com';

  React.useEffect(() => {
    if (/^http[s]?:\/\/([\S]{3,})/i.test(message)) {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('IT MUST BE URL.');
    }
  }, [message]);

  return (
    <div>
      <h2>VURL</h2>
      <h3>INPUT URL.</h3>
      <VURL
        vState={vState}
        vType={'outer'}
        // vClassName={'test'}
        vShowMessage={true}
        vMessage={vMessage}
        vLocateMessage={'bottom-left'}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setmessage(e.target.value);
          },
          placeholder: 'this is react-validate-component test.',
          className: styles.input_text,
          defaultValue: 'https://www.naver.com',
        }}
      />
    </div>
  );
};

export default App;
```

#### Props

- `vState` (boolean): 유효성 상태 값입니다.
- `vType` (`inner`, `outer`, `tooltip`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): 유효성 메시지를 element 어디에 붙일지 위치값입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

- `vState` (boolean): The validity status value.
- `vType` (`inner`, `outer`, `tooltip`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): The position where the validation message should be displayed relative to the element.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.

### VEmail Component

`VEmail` 컴포넌트는 기본적인 Email 필드에 유효성 검사 문구를 출력해주는 기능을 제공합니다.

The `VEmail` component provides functionality to display validation messages for basic Email fields.

#### 사용 예제, Example

```jsx
import React from 'react';
import { VEmail } from 'react-validate-component';

const App = () => {
  const [vState, setvState] = React.useState < boolean > false;
  const [vMessage, setvMessage] = React.useState < string > '';
  const [message, setmessage] =
    React.useState < string > 'https://www.naver.com';

  React.useEffect(() => {
    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(message)) {
      setvState(false);
      setvMessage('');
    } else {
      setvState(true);
      setvMessage('IT MUST BE EMAIL.');
    }
  }, [message]);

  return (
    <div>
      <h2>VEmail</h2>
      <h3>INPUT EMail.</h3>
      <VEmail
        vState={vState}
        vType={'outer'}
        // vClassName={'test'}
        vShowMessage={true}
        vMessage={vMessage}
        vLocateMessage={'bottom-left'}
        vMessageClass={styles.validation_message}
        vIsAnimate={true}
        props={{
          onChange: (e: { target: { value: string } }) => {
            setmessage(e.target.value);
          },
          placeholder: 'this is react-validate-component test.',
          className: styles.input_text,
          defaultValue: 'test@test.com',
        }}
      />
    </div>
  );
};

export default App;
```

#### Props

- `vState` (boolean): 유효성 상태 값입니다.
- `vType` (`inner`, `outer`, `tooltip`): 유효성 메시지를 띄우는 타입입니다.
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): 유효성 메시지를 element 어디에 붙일지 위치값입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (현재는 opacity만 적용되어있습니다.)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

- `vState` (boolean): The validity status value.
- `vType` (`inner`, `outer`, `tooltip`): The type of validation message display.
- `vClassName` (string): The class name to apply for validation styling.
- `vShowMessage` (boolean): Whether to display the validation message.
- `vMessage` (string): The error message to display when validation fails.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): The position where the validation message should be displayed relative to the element.
- `vMessageClass` (string): The class name to apply to the validation message.
- `vIsAnimate` (boolean): Whether to apply animation when displaying the validation message (currently, only opacity animation is supported).
- `props` (object): Other options. Enter values for attributes that can be added to the basic input tag.

### 유효성 검사 규칙, Validation Rules

- 지금은 사용자가 정규식 혹은 함수를 이용해 작성한 유효성검사 로직을 토대로 element에 출력하고 있습니다.
- 상단에 예시를 확인하여 주시기 바랍니다.

- Currently, validation messages are displayed based on validation logic written by the user using regular expressions or functions.
- Please refer to the examples provided above.

## 개발중인 기능, Features in Development

- 현재 `VText`, `VCheckbox`, `VURL`, `VEmail` 컴포넌트만 구현되어 있으며, 다른 입력 유형에 대한 컴포넌트도 개발할 예정입니다.
- 추가적인 유효성 검사 규칙 및 에러 메시지 처리 기능이 계획되어 있습니다.
- 현재 문서에 이미지를 추가한 문서 업데이트도 예정되어있습니다.

- Currently, only the `VText`, `VCheckbox`, `VURL`, `VEmail` component is implemented, but components for other input types are planned for development.
- Additional validation rules and error message handling features are also in the pipeline.
- Updates to the documentation, including the addition of images, are also planned.

## 기여, Contributions

기여를 원하시는 분은 언제든지 pull request를 제출하거나 이슈를 제기해 주세요. 코드 기여 및 피드백을 환영합니다!

If you would like to contribute, please feel free to submit a pull request or open an issue at any time. We welcome code contributions and feedback!

## 라이센스, License

이 라이브러리는 [MIT 라이센스](LICENSE) 하에 배포됩니다.

This library is distributed under the [MIT License](LICENSE).
