import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { VCheckbox } from '../dist';

describe('VCheckbox', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    const root = createRoot(input);
    root.render(
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
    );
  });
});
