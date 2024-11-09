import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VColor } from '../dist';

describe('VURL', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
      <VColor
        defaultValue={'#aa1177'}
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
    );
  });
});
