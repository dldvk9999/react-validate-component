# react-validate-component

`react-validate-component`는 리액트에서 입력 유효성 검사를 간편하게 처리할 수 있도록 도와주는 라이브러리입니다. 이 컴포넌트를 사용하여 간단하게 입력의 유효성을 검사할 수 있습니다.

`react-validate-component` is a library that helps simplify input validation in React. Which allows for easy validation of input.

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

현재 라이브러리에는 `vText`, `vCheckbox`, `vURL`, `vEmail`, `vRadio`, `vColor`, `vRange`, `vDate` 컴포넌트가 구현되어 있습니다. 이 컴포넌트를 사용하여 텍스트 입력 필드의 유효성 검사를 쉽게 구현할 수 있습니다.

The library currently includes the `vText`, `vCheckbox`, `vURL`, `vEmail`, `vRadio`, `vColor`, `vRange`, `vDate` component. You can use this component to easily implement validation for text input fields.

## 컴포넌트, Components

- [vText](./doc/vtext.md)
- [vCheckbox](./doc/vcheckbox.md)
- [vURL](./doc/vurl.md)
- [vEmail](./doc/vemail.md)
- [vRadio](./doc/vradio.md)
- [vColor](./doc/vcolor.md)
- [vRange](./doc/vrange.md)
- [vDate](./doc/vdate.md)

### 유효성 검사 규칙, Validation Rules

- 지금은 사용자가 정규식 혹은 함수를 이용해 작성한 유효성검사 로직을 토대로 element에 출력하고 있습니다.
- 상단에 예시를 확인하여 주시기 바랍니다.

- Currently, validation messages are displayed based on validation logic written by the user using regular expressions or functions.
- Please refer to the examples provided above.

## 개발중인 기능, Features in Development

- 추가적인 유효성 검사 규칙 및 에러 메시지 처리 기능이 계획되어 있습니다.

- Additional validation rules and error message handling features are also in the pipeline.

## 기여, Contributions

기여를 원하시는 분은 언제든지 pull request를 제출하거나 이슈를 제기해 주세요. 코드 기여 및 피드백을 환영합니다!

If you would like to contribute, please feel free to submit a pull request or open an issue at any time. We welcome code contributions and feedback!

## 라이센스, License

이 라이브러리는 [MIT 라이센스](LICENSE) 하에 배포됩니다.

This library is distributed under the [MIT License](LICENSE).
