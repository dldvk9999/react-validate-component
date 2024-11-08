import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VRadio } from '../dist';

describe('VRadio', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
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
    );
  });
});
