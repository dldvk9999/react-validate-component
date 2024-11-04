import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import * as VComponent from './component/index';

const App = () => {
  return (
    <section className={styles.layout}>
      <h1>React-Validate-Component</h1>
      <div>
        <h2>VText</h2>
        <h3>DO NOT INPUT NUMBER.</h3>
        <VComponent.VTextComponent />
      </div>
      <div>
        <h2>VCheckbox</h2>
        <h3>CHECK UP TO 3.</h3>
        <VComponent.VCheckboxComponent />
      </div>
    </section>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
