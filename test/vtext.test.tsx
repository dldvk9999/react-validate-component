import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { VText } from '../src';

describe('VText', () => {
  it('renders without crashing', () => {
    const input = document.createElement('input');
    ReactDOM.render(
      <VText maxLength={0} value={''} className={''} props={{}} />,
      input
    );
    ReactDOM.unmountComponentAtNode(input);
  });
});
