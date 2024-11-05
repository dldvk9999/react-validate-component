import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VEmail } from '../.';

describe('VEmail', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
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
    );
  });
});
