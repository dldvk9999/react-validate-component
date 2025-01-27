import 'react-app-polyfill/ie11';
import { useEffect, useCallback, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './index.module.css';
import * as VComponent from './component/VComponent';
import Nav from './component/Nav/nav';
import Footer from './component/Footer/footer';

const App = () => {
  const headerArea = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  // 스크롤을 감지해서 타이틀의 fontSize와 opacity를 조절
  const handleScroll = useCallback(() => {
    title.current!.style.fontSize = `${Math.min(
      Math.max((1000 - window.scrollY) / 5, 45),
      100
    )}px`;
    title.current!.style.opacity = `${Math.min(
      Math.max(((1000 - window.scrollY) / 1000) * 1.5, 0),
      1
    )}`;
  }, []);

  // intersectionObserver가 headerArea의 50% 영역에 닿았을 때 실행
  const callback = useCallback(([entry]) => {
    // 50% 이하면 handleScroll 리스너 실행, 아니면 제거
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
      <header ref={headerArea} className={styles.header}>
        <h1 ref={title}>React-Validate-Component</h1>
      </header>
      <div className={styles.layout}>
        <Nav />
        <section className={styles.components}>
          <div id="VText">
            <VComponent.VTextComponent />
          </div>
          <div id="VCheckbox">
            <VComponent.VCheckboxComponent />
          </div>
          <div id="VURL">
            <VComponent.VURLComponent />
          </div>
          <div id="VEmail">
            <VComponent.VEmailComponent />
          </div>
          <div id="VRadio">
            <VComponent.VRadioComponent />
          </div>
          <div id="VColor">
            <VComponent.VColorComponent />
          </div>
          <div id="VRange">
            <VComponent.VRangeComponent />
          </div>
          <div id="VDate">
            <VComponent.VDateComponent />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
