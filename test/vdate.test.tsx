import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VDate } from '../dist';

describe('VDate', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
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
    );
  });
});
