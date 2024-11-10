import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VRange } from '../dist';

describe('VRange', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
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
    );
  });
});
