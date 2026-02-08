import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VURL } from '../dist';

describe('VURL', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
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
    );
  });
});
