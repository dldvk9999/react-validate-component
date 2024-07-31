import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { VText } from '../.';

const App = () => {
  return (
    <div>
      <VText maxLength={0} value={''} className={''} props={{}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
