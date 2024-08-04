import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import { VText } from '../.';

const App = () => {
  return (
    <section className={styles.layout}>
      <h1>React-Validate-Component</h1>
      <div>
        <h2>VText</h2>
        <VText
          value={''}
          className={styles.input_text}
          placeholder="this is react-validate-component test."
          state
          onChange={() => {}}
          props={{}}
        />
      </div>
    </section>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
