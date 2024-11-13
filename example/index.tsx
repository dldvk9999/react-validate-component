import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import * as VComponent from './component';

const App = () => {
  const [isTop, setTop] = React.useState<boolean>(true);

  React.useEffect(() => {
    window.scrollTo({ top: 0 });

    const handleScroll = () => {
      if (window.scrollY !== 0) setTop(false);
      else setTop(true);
    };

    // window에 scroll 이벤트를 넣는다.
    window.addEventListener('scroll', handleScroll);

    // 페이지를 벗어날 때 이벤트를 제거한다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <section className={`${styles.title} ${isTop ? '' : styles.top}`}>
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
        <VComponent.VDateComponent />
      </section>
    </main>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
