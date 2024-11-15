import 'react-app-polyfill/ie11';
import { useEffect, useCallback, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import * as VComponent from './component';

const App = () => {
  const headerArea = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  const handleScroll = useCallback(() => {
    title.current!.style.fontSize = `${Math.min(Math.max((1000 - window.scrollY) / 5, 45), 100)}px`;
    title.current!.style.opacity = `${Math.min(Math.max((1000 - window.scrollY) / 1000 * 1.5, 0), 1)}`;
  }, []);

  const callback = useCallback(([entry]) => {
    if (entry.intersectionRatio <= 0.5) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });
    observer.observe(headerArea.current!);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <section ref={headerArea} className={styles.title}>
        <h1 ref={title}>React-Validate-Component</h1>
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
