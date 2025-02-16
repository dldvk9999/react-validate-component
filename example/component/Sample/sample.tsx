import Highlight from 'react-highlight';

export default function Sample({ component }) {
  switch (component) {
    case 'VText':
      return (
        <Highlight className="language-js">
          {`
            <VText
                vState={true}
                vType={'outer'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vLocateMessage={'bottom-left'}
                vMessageClass={'test'}
                vIsAnimate={true}
                vUseMaxLength={true}
                vMaxLength={30}
                vClassMaxLength={'test'}
                props={{
                    onChange: () => {},
                    placeholder: 'this is react-validate-component test.',
                    className: 'test',
                    defaultValue: 'test',
                }}
            />
          `}
        </Highlight>
      );
    case 'VCheckbox':
      return (
        <Highlight className="language-js">
          {`
            <VCheckbox
                vState={true}
                vType={'bottom'}
                vClassName={'test'}
                vLayoutClassName={'test'}
                vLabelClassName={'test'}
                vCheckedClassName={'test'}
                vCheckList={[]}
                vCheckedList={[]}
                vShowMessage={true}
                vMessage={'test'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                }}
            />
        `}
        </Highlight>
      );
    case 'VURL':
      return (
        <Highlight className="language-js">
          {`
            <VURL
                vState={true}
                vType={'outer'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vLocateMessage={'bottom-left'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                    placeholder: 'this is react-validate-component test.',
                    className: 'test',
                    defaultValue: 'https://www.test.com',
                }}
            />
          `}
        </Highlight>
      );
    case 'VEmail':
      return (
        <Highlight className="language-js">
          {`
            <VEmail
                vState={true}
                vType={'outer'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vLocateMessage={'bottom-left'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                    placeholder: 'this is react-validate-component test.',
                    className: 'test',
                    defaultValue: 'test@test.com',
                }}
            />
        `}
        </Highlight>
      );
    case 'VRadio':
      return (
        <Highlight className="language-js">
          {`
            <VRadio
                vState={true}
                vName={'selectTest'}
                vSelectListName={['one', 'two', 'three', 'four', 'five']}
                vSelectListValue={['1', '2', '3', '4', '5']}
                vType={'bottom'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vLocateMessage={'bottom-left'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                }}
            />
        `}
        </Highlight>
      );
    case 'VColor':
      return (
        <Highlight className="language-js">
          {`
            <VColor
                vState={true}
                vType={'bottom'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                }}
            />
          `}
        </Highlight>
      );
    case 'VRange':
      return (
        <Highlight className="language-js">
          {`
            <VRange
                vState={true}
                vType={'bottom'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                    min: 0,
                    max: 100,
                    step: 10,
                    value: 50,
                }}
            />
        `}
        </Highlight>
      );
    case 'VDate':
      return (
        <Highlight className="language-js">
          {`
            <VDate
                vState={true}
                vType={'bottom'}
                vClassName={'test'}
                vShowMessage={true}
                vMessage={'test'}
                vMessageClass={'test'}
                vIsAnimate={true}
                props={{
                    onChange: () => {},
                    min: '2024-01-01',
                    max: '2024-12-31',
                    value: '2024-11-11',
                }}
            />
          `}
        </Highlight>
      );
  }
}
