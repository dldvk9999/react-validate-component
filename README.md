# react-validate-component

`react-validate-component`는 리액트 애플리케이션에서 입력 유효성 검사를 간편하게 처리할 수 있도록 도와주는 라이브러리입니다. 현재 `VText` 컴포넌트가 구현되어 있으며, 이 컴포넌트를 사용하여 간단하게 텍스트 입력의 유효성을 검사할 수 있습니다.

## 설치

`react-validate-component` 라이브러리는 npm 또는 yarn을 통해 설치할 수 있습니다.

### npm

```bash
npm install react-validate-component
```

### yarn

```bash
yarn add react-validate-component
```

## 사용법

현재 라이브러리에는 `VText` 컴포넌트가 포함되어 있습니다. 이 컴포넌트를 사용하여 텍스트 입력 필드의 유효성 검사를 쉽게 구현할 수 있습니다.

### VText 컴포넌트

`VText` 컴포넌트는 기본적인 텍스트 입력 필드와 유효성 검사 기능을 제공합니다.

#### 기본 사용 예제

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
      setVMessage('숫자는 입력이 안됩니다.');
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
        <VText
          vState={vState}
          vClassName={''}
          vShowMessage={true}
          vMessage={vMessage}
          vIsInnerMessage={true}
          vLocateMessage={'top-left'}
          vMessageClass={styles.validation_message}
          vIsAnimate={false}
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
- `vClassName` (string): 유효성 입힐 class 명입니다.
- `vShowMessage` (boolean): 유효성 메시지 출력 여부값입니다.
- `vMessage` (string): 유효성 검사 실패 시 표시할 에러 메시지입니다.
- `vIsInnerMessage` (boolean): 유효성 메시지를 element 안에 넣을지 (absolute 형태) 여부입니다.
- `vLocateMessage` (`top-left`, `top`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom`, `bottom-right`): 유효성 메시지를 element 어디에 붙일지 위치값입니다.
- `vMessageClass` (string): 유효성 메시지에 입힐 class 명입니다.
- `vIsAnimate` (boolean): 유효성 메시지 출력 시 애니메이션 적용할지 여부입니다. (개발중, 삭제될 수 있음)
- `props` (object): 기타 옵션입니다. 기본 input 태그에 attribute로 넣을 값들을 입력하시면 됩니다.

### 유효성 검사 규칙

- 지금은 사용자가 정규식 혹은 함수를 이용해 작성한 유효성검사 로직을 토대로 element에 출력하고 있습니다.
- 상단에 예시를 확인하여 주시기 바랍니다.

## 개발 중인 기능

- 현재 `VText` 컴포넌트만 구현되어 있으며, 다른 입력 유형에 대한 컴포넌트도 개발할 예정입니다.
- 추가적인 유효성 검사 규칙 및 에러 메시지 처리 기능이 계획되어 있습니다.
- 현재 문서에 이미지를 추가한 문서 업데이트 예정되어있습니다.

## 기여

기여를 원하시는 분은 언제든지 pull request를 제출하거나 이슈를 제기해 주세요. 코드 기여 및 피드백을 환영합니다!

## 라이센스

이 라이브러리는 [MIT 라이센스](LICENSE) 하에 배포됩니다.
