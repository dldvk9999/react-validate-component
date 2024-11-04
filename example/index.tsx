import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import * as VComponent from './component';

const App = () => {
  return (
    <section className={styles.layout}>
      <h1>React-Validate-Component</h1>
      <VComponent.VTextComponent />
      <VComponent.VCheckboxComponent />
      <VComponent.VURLComponent />
    </section>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
