import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import * as VComponent from './component';

const App = () => {
  return (
    <>
      <section className={styles.title}>
        <h1>React-Validate-Component</h1>
      </section>
      <section className={styles.layout}>
        <VComponent.VTextComponent />
        <VComponent.VCheckboxComponent />
        <VComponent.VURLComponent />
        <VComponent.VEmailComponent />
        <VComponent.VRadioComponent />
        <VComponent.VColorComponent />
        <VComponent.VRangeComponent />
      </section>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
